import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  moderateScale,
  textScale,
  verticalScale,
} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';

export default function TextInputComp({
  value = '',
  onChangeText = () => {},
  placeholder = '',
  secureText = false,
  secureTextEntry = false,
  onPressSecure = () => {},
  style = {},
  textStyle = {},
  placeholderTextColor = colors.whiteColorOpacity20,
  ...props
}) {
  return (
    <View style={{...styles.inputStyle, ...style}}>
      <TextInput
        style={{...styles.textStyle, ...textStyle}}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry = {secureTextEntry}
        {...props}
      />
      {!!secureText ? (
        <Text style={{...styles.textStyle, flex: 0}} onPress={onPressSecure}>
          {secureText}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: moderateScale(52),
    borderRadius: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    backgroundColor: colors.gray2,
    marginBottom: verticalScale(16),
  },
  textStyle: {
    color: colors.whiteColor,
    fontSize: textScale(14),
    fontFamily: fontFamily.regular,
    flex: 1,
  },
});
