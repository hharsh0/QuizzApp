import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.optionText}>Options</Text>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    marginTop: 24,
  },
  optionText: {
      fontSize: 20,
  }
});