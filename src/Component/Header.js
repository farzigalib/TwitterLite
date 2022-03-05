import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = (props) => {
    return (
        <View
            style={[styles.container, { backgroundColor: props.backgroundColor }]}
        >
            <TouchableOpacity style={{ marginLeft: 15, alignItems: 'center' }} {...props}>
                <FontAwesome5 name={props.iconName} size={35} color='#000' />
            </TouchableOpacity>
            <Text style={[styles.text, { color: props.color }]}>{props.headerTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        elevation: 0
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 5,
        marginLeft: '30%'
    }
})

export default Header