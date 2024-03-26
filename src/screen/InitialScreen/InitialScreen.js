import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InitialScreen = () => {
    return (
        <View style={styles.container}>
            <Text> InitialScreen </Text>
        </View>
    )
}

export default InitialScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})