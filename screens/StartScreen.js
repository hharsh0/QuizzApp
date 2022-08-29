import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../constants/theme'
import LottieView from "lottie-react-native";
import PrimaryButton from '../components/PrimaryButton';


const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          style={{
            width: 400,
            height: 400,
            backgroundColor: "#B1E1FF",
          }}
          source={require("../assets/animations/start.json")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => navigation.navigate("Quiz")}>
          Start
        </PrimaryButton>
      </View>
    </View>
  );
}

export default StartScreen

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: theme.secondary100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    // marginBottom: 40,
  },
});