import { useState, useEffect } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import NavigationButton from "../components/NavigationButton";
import LottieView from "lottie-react-native";
import theme from "../constants/theme";


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const URL =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986"
  
  const getQuestions = async () => {
    setIsLoading(true);
    const res = await fetch(URL);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptions(data.results[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptions(questions[ques + 1]));
  };

  const generateOptions = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    console.log(_question.correct_answer);
    shuffleArray(options);

    return options;
  };

  const handlSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptions(questions[ques + 1]));
    }
    if (ques === 9) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LottieView
          autoPlay
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          source={require("../assets/animations/loading.json")}
        />
      ) : (
        questions && (
          <View style={styles.root}>
            <View style={styles.top}>
              <Text style={styles.question}>
                {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.options}>
              <PrimaryButton onPress={() => handlSelectedOption(options[0])}>
                {decodeURIComponent(options[0])}
              </PrimaryButton>
              <PrimaryButton onPress={() => handlSelectedOption(options[1])}>
                {decodeURIComponent(options[1])}
              </PrimaryButton>
              <PrimaryButton onPress={() => handlSelectedOption(options[2])}>
                {decodeURIComponent(options[2])}
              </PrimaryButton>
              <PrimaryButton onPress={() => handlSelectedOption(options[3])}>
                {decodeURIComponent(options[3])}
              </PrimaryButton>
            </View>
            <View style={styles.bottom}>
              {ques !== 9 && (
                <Pressable
                  style={styles.buttonContainer}
                  onPress={handleNextPress}
                >
                  <Text style={styles.buttonText}>SKIP</Text>
                </Pressable>
              )}

              {ques === 9 && (
                <Pressable
                  style={styles.buttonContainer}
                  onPress={handleShowResult}
                >
                  <Text style={styles.buttonText}>SHOW RESULTS</Text>
                </Pressable>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonContainer: {
    backgroundColor: theme.primary700,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  question: {
    fontSize: 28,
  },
  root: {
    flex: 1
  },
});