import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import navigationStrings from '../../navigations/navigationStrings'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily :'Barlow-Bold' }} onPress={() => navigation.navigate(navigationStrings.CREATE_POST)}> Home </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})