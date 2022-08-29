import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import theme from '../constants/theme'
import PrimaryButton from '../components/PrimaryButton';
import Options from '../components/Options';

const QuizScreen = ({navigation}) => {
     const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.card}>
        <Text style={styles.questionText}>This is a question?</Text>
        <View>
          <Options />
          <Options />
          <Options />
          <Options />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton style={styles.skipButton} onPress={()=> navigation.navigate("Result")}>Skip</PrimaryButton>
        <PrimaryButton style={styles.nextButton}>Next</PrimaryButton>
      </View>
    </View>
  );
}

export default QuizScreen

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: theme.primary100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
    },
    card: {
        backgroundColor: theme.primary200,
        padding: 24,
        borderRadius: 20,
        width: '90%',
    },
    questionText: {
        fontSize: 30,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    }
})