import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../Component/CustomButton'

const InitialScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='dark-content'
                backgroundColor={'#3393DF'}
            />
            <Image
                source={require('../../assets/authassets/twitterlogo.png')}
                style={styles.logo}
            />
            <View style={{ marginTop: 70, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <CustomButton
                    title='LOG IN'
                    height={60}
                    width={'80%'}
                    borderRadius={30}
                    backgroundColor={'#ffcc66'}
                    onPress={() => navigation.navigate('LogInScreen')}
                />
                <CustomButton
                    title='SIGN UP'
                    height={60}
                    width={'80%'}
                    borderRadius={30}
                    backgroundColor={'#900000'}
                    onPress={() => navigation.navigate('SignUpScreen')}
                />
            </View>
            <View style={{ marginTop: 150 }}>
                <Text style={{ color: '#fff' }}>Twitter.Inc © 2022</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3393DF',
        alignItems: 'center',
    },
    logo: {
        height: 150,
        width: 180,
        margin: 150,
        resizeMode: 'stretch'
    }
})

export default InitialScreen