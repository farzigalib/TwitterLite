import React from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

const KeyboardAvoidingWrapper = ({ children }) => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
        // behavior='padding'
        >
            <ScrollView contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                paddingTop: 50
            }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoidingWrapper;