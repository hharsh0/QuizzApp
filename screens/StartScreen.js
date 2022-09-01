import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import theme from '../constants/theme'
import LottieView from "lottie-react-native";
import PrimaryButton from '../components/PrimaryButton';
import NavigationButton from '../components/NavigationButton';


const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      {/* <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          colorFilters={[
            {
              keypath: "button",
              color: theme.primary100,
            },
            {
              keypath: "Sending Loader",
              color: theme.primary100,
            },
          ]}
          style={{
            width: 400,
            height: 400,
            // backgroundColor: theme.primary100,
          }}
          source={require("../assets/animations/start.json")}
        />
      </View> */}
      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/images/test.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <NavigationButton onPress={() => navigation.navigate("Quiz")}>
          START
        </NavigationButton>
      </View>
    </View>
  );
}

export default StartScreen

const styles = StyleSheet.create({
  rootContainer: {
    // backgroundColor: theme.primary100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
    marginBottom: 10,
  },
});