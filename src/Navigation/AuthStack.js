import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import InitialScreen from '../Screen/InitialScreen';
import LogInScreen from '../Screen/LogInScreen';
import SignUpScreen from '../Screen/SignUpScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='InitialScreen'
                component={InitialScreen}
            />
            <Stack.Screen
                name='LogInScreen'
                component={LogInScreen}
            />
            <Stack.Screen
                name='SignUpScreen'
                component={SignUpScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthStack;