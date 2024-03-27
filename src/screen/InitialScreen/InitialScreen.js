import {View, Text, StyleSheet, Button, Image, Alert} from 'react-native';
import React from 'react';
import navigationStrings from '../../navigations/navigationStrings';
import {saveUserData} from '../../redux/reducers/auth';
import store from '../../redux/store';
import WrapperContainer from '../../component/WrapperContainer';
import colors from '../../styles/colors';
import imagePath from '../../constant/imagePath';
import strings from '../../constant/lang';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../component/ButtonComp';

const {dispatch} = store;

const InitialScreen = ({navigation}) => {
  const onLogin = () => {
    dispatch(saveUserData({isLogin: true}));
  };

  const privacyPolicy = type => {
    if (type == 1) {
      Alert.alert('Terms');
    } else {
      Alert.alert('Privacy');
    }
  };
  return (
    <WrapperContainer>
      <View style={{padding: moderateScale(35), alignItems: 'center'}}>
        <Image style={styles.logoStyles} source={imagePath.icLogo} />
        <View
          style={{
            ...styles.termsConditionStyle,
            paddingVertical: moderateScaleVertical(150),
          }}>
          <View style={{...styles.termsConditionStyle, gap: moderateScale(5)}}>
            <Text style={{...styles.textStyle, textAlign: 'center'}}>
              {strings.BY_CLICKING_LOG_IN}
              <Text
                onPress={() => privacyPolicy(1)}
                style={{...styles.textStyle, fontFamily: fontFamily.bold}}>
                {' '}
                {strings.TERMS}
                {','}
              </Text>
            </Text>
            <Text style={styles.textStyle}>
              {strings.LEARN_HOW_WE_PRCOESS}
              <Text
                onPress={() => privacyPolicy()}
                style={{...styles.textStyle, fontFamily: fontFamily.bold}}>
                {' '}
                {strings.PRIVACY_POLICY}
              </Text>
            </Text>
          </View>
        </View>
        <View style={{position: 'absolute', top: moderateScale(400)}}>
          <View style={{...styles.termsConditionStyle, gap: 30}}>
            <ButtonComp
              style={{width: '100%', backgroundColor: colors.redColor}}
              onPress={() => navigation.navigate(navigationStrings.LOGIN)}
              textStyle={{
                color: colors.whiteColor,
                fontFamily: fontFamily.bold,
              }}
              text={strings.LOG_IN_WITH_PHONE_NUMBER}
            />
            <Text
              style={{color: colors.whiteColor, fontFamily: fontFamily.bold}}>
              {strings.OR}
            </Text>
            <ButtonComp
              leftImg={imagePath.icFacebook}
              style={{width: '100%', backgroundColor: colors.whiteColor}}
              textStyle={{color: colors.grayColor, fontFamily: fontFamily.bold}}
              text={strings.LOG_IN_WITH_FACEBOOK}
            />
            <ButtonComp
              leftImg={imagePath.icGoogle}
              style={{width: '100%', backgroundColor: colors.whiteColor}}
              textStyle={{color: colors.grayColor, fontFamily: fontFamily.bold}}
              text={strings.LOG_IN_WITH_GOOGLE}
            />
            <ButtonComp
              leftImg={imagePath.icApple}
              style={{width: '100%', backgroundColor: colors.whiteColor}}
              textStyle={{color: colors.grayColor, fontFamily: fontFamily.bold}}
              text={strings.LOG_IN_WITH_APPLE}
            />
            <Text
              style={{color: colors.whiteColor, fontFamily: fontFamily.bold}}>
              {strings.NEW_HERE}
              <Text style={{color: colors.blueLight}}> {strings.SIGN_UP}</Text>
            </Text>
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyles: {
    width: 150,
    height: 150,
  },
  textStyle: {
    color: colors.whiteColor,
    fontFamily: fontFamily.regular,
  },
  termsConditionStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(300),
    justifyContent: 'center',
  },
});
