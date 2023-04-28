/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import OnBoardingPage from './src/screens/OnBoardingPage';
import HomePage from './src/screens/HomePage';
import LoginPage from './src/screens/LoginPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function OnBoardingStack() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoardingPage} />
      <Stack.Screen
        name="Login"
        component={LoginPage} />
      <Stack.Screen
        name="Home"
        component={HomePage} />
    </Stack.Navigator>
  )
}

function App(): JSX.Element {
  useEffect(() => {
    async function prepare() {
      try {
        // our api calls will be here.
        new Promise(() => setTimeout(() => {
          SplashScreen.hide();
        }, 2000));
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  });

  return (
    <NavigationContainer>
      <OnBoardingStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
