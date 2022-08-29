import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import theme from '../constants/theme';


const LoadingScreen = ({ navigation }) => {

  setInterval( ()=>{
    navigation.navigate("Result")
  }, 5000);
  
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
          source={require("../assets/animations/end.json")}
        />
      </View>
    </View>
  );
}

export default LoadingScreen

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: theme.primary100,
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
});