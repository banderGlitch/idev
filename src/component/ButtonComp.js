import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, textScale } from '../styles/responsiveSize'
import fontFamily from '../styles/fontFamily'

export default function ButtonComp({
    onPress = () => { },
    text = '',
    style = {},
    textStyle = {},
    leftImg = null


}) {
    return (
        <TouchableOpacity style={{ ...styles.container, ...style }} onPress={onPress} activeOpacity={0.7}>
            {!!leftImg ? <Image source={leftImg}/> : <View/>}
            <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
            <View/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: colors.redColor,
        height : moderateScale(42),
        paddingHorizontal: moderateScale(50),
        borderRadius: moderateScale(10)
    },
    textStyle: {
        alignItems:'center',
        textAlign:'center',
        color: colors.whiteColor,
        fontFamily: fontFamily.bold
    }

})

