import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Image, StatusBar } from 'react-native';
import CustomButton from '../Component/CustomButton';
import FormInput from '../Component/FormInput';
import KeyboardAvoidingWrapper from '../Component/KeyboardAvoidingWrapper';
import SocialButton from '../Component/SocialButton';



const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.container}>
            <KeyboardAvoidingWrapper>
                <>
                    <StatusBar
                        barStyle='dark-content'
                        backgroundColor={'#f9fafd'}
                    />
                    <Image
                        source={require('../../assets/authassets/signup.png')}
                        style={{ width: 150, height: 200, resizeMode: 'stretch', marginTop: -50 }}
                    />
                    <Text style={styles.text}>Create an account</Text>

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

                    <FormInput
                        labelValue={confirmPassword}
                        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                        placeholderText="Confirm Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />

                    <CustomButton
                        title='SIGN UP'
                        height={60}
                        width={'100%'}
                        borderRadius={30}
                        backgroundColor={'#4844dd'}
                    />

                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By registering, you confirm that you accept our{' '}
                        </Text>
                        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                            <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                                Terms of service
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.color_textPrivate}> and </Text>
                        <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                            Privacy Policy
                        </Text>
                    </View>

                    {Platform.OS === 'android' ? (
                        <View>
                            {/* <SocialButton
                                buttonTitle="Sign Up with Facebook"
                                btnType="facebook"
                                color="#4867aa"
                                backgroundColor="#e6eaf4"
                                onPress={() => fbLogin()}
                            /> */}

                            <SocialButton
                                buttonTitle="Sign Up with Google"
                                btnType="google"
                                color="#de4d41"
                                backgroundColor="#f5e7ea"
                                onPress={() => googleLogin()}
                            />
                        </View>
                    ) : null}

                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => navigation.navigate('LogInScreen')}>
                        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
                    </TouchableOpacity>
                </>
            </KeyboardAvoidingWrapper>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 20,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
        textTransform: 'uppercase',
    },
    navButton: {
        marginTop: 80,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});