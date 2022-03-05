import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    StatusBar
} from 'react-native';
import KeyboardAvoidingWrapper from '../Component/KeyboardAvoidingWrapper';
import FormInput from '../Component/FormInput';
import SocialButton from '../Component/SocialButton';
import CustomButton from '../Component/CustomButton';

const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <KeyboardAvoidingWrapper>
            <>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={'#f2f2f2'}
                />
                <Image
                    source={require('../../assets/authassets/login.png')}
                    style={styles.logo}
                    resizeMode={'stretch'}
                />
                <Text style={styles.text}>Welcome Back</Text>

                <FormInput
                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Email"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <FormInput
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    placeholderText="Password"
                    iconType="lock"
                    secureTextEntry={true}
                />

                <CustomButton
                    title='LOG IN'
                    height={60}
                    width={'100%'}
                    borderRadius={30}
                    backgroundColor={'#4844dd'}
                />

                {Platform.OS === 'android' ? (
                    <View style={{ marginTop: 50 }}>
                        {/* <SocialButton
                            buttonTitle="Sign In with Facebook"
                            btnType="facebook"
                            color="#4867aa"
                            backgroundColor="#e6eaf4"
                            onPress={() => fbLogin()}
                        /> */}

                        <SocialButton
                            buttonTitle="Sign In with Google"
                            btnType="google"
                            color="#de4d41"
                            backgroundColor="#f5e7ea"
                            onPress={() => googleLogin()}
                        />
                    </View>
                ) : null}

                <TouchableOpacity
                    style={styles.sigupPageButton}
                    onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={styles.navButtonText}>
                        Don't have an acount? Create here
                    </Text>
                </TouchableOpacity>
            </>
        </KeyboardAvoidingWrapper>
    );
};

export default LogInScreen;

const styles = StyleSheet.create({
    logo: {
        height: 250,
        width: 200,
        marginTop: -20,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 15,
        color: '#051d5f',
        marginTop: 15,
    },
    navButton: {
        marginTop: 15,
    },
    sigupPageButton: {
        marginTop: 100
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});