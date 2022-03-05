import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = ({ isLoading = false }) => {
    if (isLoading) {
        return (
            <Modal transparent={true}>
                <View style={styles.loaderStyle}>
                    <ActivityIndicator color={'#900'} size={50} />
                </View>
            </Modal>
        )
    }
    return null;
};

const styles = StyleSheet.create({
    loaderStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
})

export default Loader