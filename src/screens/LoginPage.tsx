/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    BackHandler,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
    Image,
} from 'react-native';
import HeaderLogo from '../assets/ic_logogram.svg';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    OnBoarding: undefined;
}

type LoginPageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

function LoginPage({ navigation }: LoginPageProps): JSX.Element {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [isPasswordSecure, setIsPasswordSecure] = React.useState(true);
    const managePasswordVisibility = () => {
        setIsPasswordSecure(!isPasswordSecure)
    };
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <ScrollView>
                <View style={{ flex: 1, padding: 16 }}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 78
                        }}>
                        <HeaderLogo />
                        <Text
                            style={[
                                styles.headerText,
                                {
                                    marginTop: 50,
                                }
                            ]}>
                            Let's Get Started
                        </Text>
                        <Text
                            style={[
                                styles.titleText,
                                {
                                    marginTop: 4
                                }
                            ]}>
                            for optimal workforce performance
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            marginTop: 24
                        }}>
                        <Text
                            style={styles.titleText}>
                            Company Email
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeEmail}
                            value={email}
                        />
                        <Text
                            style={[
                                styles.titleText,
                                {
                                    marginTop: 22
                                }
                            ]}>
                            Password
                        </Text>
                        <View style={[styles.container]}>
                            <TextInput
                                style={styles.textInput}
                                secureTextEntry={isPasswordSecure}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="send"
                            />
                            <TouchableOpacity
                                style={styles.visibilityBtn}
                                onPress={managePasswordVisibility}>
                                <Image
                                    source={
                                        isPasswordSecure
                                            ? require('../src/assets/ic_eye_off.png')
                                            : require('../src/assets/ic_eye_on.png')
                                    }
                                    style={{ width: 15, height: 11 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginBottom: 22,
                                marginTop: 26
                            }}>
                            <Text style={styles.titleText}>
                                Forgot Password?&nbsp;
                            </Text>
                            <Text style={styles.linkText}>
                                Send Link
                            </Text>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <BouncyCheckbox
                                size={16}
                                fillColor="blue"
                                unfillColor="#FFFFFF"
                                text="Remember me"
                                textStyle={[
                                    styles.titleText,
                                    { textDecorationLine: 'none' }
                                ]}
                                iconStyle={{ borderRadius: 0 }}
                                innerIconStyle={{ borderRadius: 0 }}
                                onPress={(isChecked: boolean) => {
                                    setToggleCheckBox(isChecked)
                                }} />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                                () => BackHandler.exitApp()}>
                            <Text style={styles.boldMediumText}>Login</Text>
                        </TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 18
                            }}>
                            <Text style={styles.titleText}>
                                Have an issue?&nbsp;
                            </Text>
                            <Text style={styles.linkText}>
                                contact us
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 42,
        fontWeight: '700',
        color: '#333333'
    },
    titleText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#333333'
    },
    boldMediumText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700',
        color: '#333333'
    },
    linkText: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontSize: 12
    },
    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#D7DEDD',
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    visibilityBtn: {
        position: 'absolute',
        right: 9,
        height: 25,
        width: 25,
        padding: 0,
        marginTop: 15,
    },
});

export default LoginPage;
