import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WrapperContainer from '../../component/WrapperContainer'
import { moderateScale } from '../../styles/responsiveSize'
import strings from '../../constant/lang'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'

const Login = ({navigation}) => {
    return (
        <WrapperContainer>
            <View style={{flex:1}}>
                <Text>Text!!</Text>
                <Text style={styles.textStyle}>{strings.WELCOME_BACK}</Text>
                <Text style={styles.textStyle}>{strings.WE_ARE_HAPPY_TO_SEE}</Text>


            </View>
        </WrapperContainer>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color : colors.whiteColor,
        fontFamily : fontFamily.bold

    }
})