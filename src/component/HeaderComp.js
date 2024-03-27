import { View, Text , StyleSheet ,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from '../styles/responsiveSize';
import imagePath from '../constant/imagePath';
export default function HeaderComp({
    onPressLeft 
}) {
  const navigation = useNavigation()

  return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={!!onPressLeft ? onPressLeft : () => navigation.goBack()}>
            <Image source={imagePath.icBack}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
       height : moderateScale(42),
       flexDirection: 'row',
       alignItems : 'center',
       paddingHorizontal : moderateScale(16)
    }
})
