import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import theme from "../constants/theme"

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_rippl={{ color: theme.primary200 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: theme.primary300,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  pressed: {
    opacity: 0.75,
  },
});