import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../constants/theme'

const QuizScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>QuizScreen</Text>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: theme.secondary100,
        flex: 1,
    }
})