import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/Title";
import NavigationButton from "../components/NavigationButton";

const Result = ({ navigation, route }) => {
  const { score } = route.params;

  const resultBanner = "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png";
  
  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        {score > 10 ? (
          <Image
            source={require("../assets/images/winnerpng.png")}
            style={styles.banner}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={{
              uri: resultBanner,
            }}
            style={styles.banner}
            resizeMode="contain"
          />
        )}
      </View>
      <NavigationButton onPress={() => navigation.navigate("Start")}>
        GO TO HOME
      </NavigationButton>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center",
  },
});
