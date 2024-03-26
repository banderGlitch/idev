import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CreatePost = () => {
    return (
        <View style={styles.container}>
            <Text> Home </Text>
        </View>
    )
}

export default CreatePost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})