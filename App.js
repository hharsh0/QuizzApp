import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import StartScreen from './screens/StartScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizScreen from './screens/QuizScreen';
import theme from './constants/theme';
import LoadingScreen from './screens/LoadingScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.primary100 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Start"
            component={StartScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Quiz"
            component={QuizScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Loading"
            component={LoadingScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Result"
            component={ResultScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
