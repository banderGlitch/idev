import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CreatePost = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.goBack()}> CreatePost </Text>
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