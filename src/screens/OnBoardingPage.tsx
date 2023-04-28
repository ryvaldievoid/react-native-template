/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { PropsWithChildren } from 'react';
import {
  BackHandler,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import OnBoardBackground from '../assets/ic_onboard_background_2.svg';
import HeaderLogo from '../assets/ic_logogram_white.svg';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  OnBoarding: undefined;
}

type OnBoardingPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

function OnBoardingPage({ navigation }: OnBoardingPageProps): JSX.Element {

  const actionSheetRef = useRef<ActionSheetRef>(null);

  useEffect(() => {
    actionSheetRef.current?.show();
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OnBoardBackground
        width="100%"
        style={{
          resizeMode: 'cover'
        }} />
      <View
        style={styles.contentContainer}>
        <HeaderLogo />
      </View>
      <View style={styles.container}>
        <ActionSheet
          ref={actionSheetRef}
          defaultOverlayOpacity={0}
          closeOnTouchBackdrop={false}
          closeOnPressBack={false}>
          <Text
            style={{
              fontSize: 24,
              color: '#333333',
              fontWeight: '700',
              textAlign: 'center',
              marginTop: 40,
              marginHorizontal: 26,
              marginBottom: 16
            }}>
            What we do?
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <View style={{
              backgroundColor: '#F3CA62',
              height: 4,
              width: 80
            }} />
          </View>
          <Text
            style={{
              fontSize: 14,
              color: '#333333',
              marginTop: 16,
              marginHorizontal: 26,
              textAlign: 'center'
            }}>
            Lorem ipsum dolor sit amet consectetur. Quam mauris sit varius tellus. Vitae facilisi duis orci morbi sapien ultrices cursus vivamus. Amet at condimentum viverra non nunc interdum vulputate.
          </Text>
          <TouchableOpacity
            style={[
              styles.button
            ]}
            onPress={
              () => navigation.replace('Login')}>
            <Text style={{
              color: 'black',
              fontSize: 16,
              fontWeight: '700',
              textAlign: 'center'
            }}>Next</Text>
          </TouchableOpacity>
        </ActionSheet>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD369',
    padding: 16,
    margin: 40,
    borderRadius: 40,
    flexDirection: 'column',
    alignItems: 'center'
  },
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 24
  },
  // bottomView: {
  //   width: '100%',
  //   position: 'absolute',
  //   bottom: 0
  // },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
});

export default OnBoardingPage;
