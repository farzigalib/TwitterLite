import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, { ...props }]}
            {...props}
            activeOpacity={0.7}
        >
            <Text style={[styles.buttonText, { letterSpacing: 4 }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
})

export default CustomButton;