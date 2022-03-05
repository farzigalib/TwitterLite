import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../Component/CustomButton'

const HomeScreen = () => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <CustomButton
                title='LOG OUT'
                height={60}
                width={'100%'}
                borderRadius={30}
                backgroundColor={'#4844dd'}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})