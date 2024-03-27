import { View, Text, StyleSheet, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import WrapperContainer from '../../component/WrapperContainer';
import { moderateScale } from '../../styles/responsiveSize';
import strings from '../../constant/lang';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import TextInputComp from '../../component/TextInputComp';
import ButtonComp from '../../component/ButtonComp';
import HeaderComp from '../../component/HeaderComp';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);


    return (
        <WrapperContainer>
            <HeaderComp />
            <KeyboardAvoidingView style={{ margin: moderateScale(1) }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flexGrow: 1, padding: moderateScale(30) }}>
                        <View style={{ flexGrow: 0.8 }}>
                            <View style={{ gap: moderateScale(100) }}>
                                <View style={{ gap: moderateScale(10) }}>
                                    <Text style={{ ...styles.textStyle, fontSize: moderateScale(35), marginBottom: moderateScale(4) }}>{strings.WELCOME_BACK}</Text>
                                    <Text style={{ ...styles.textStyle, marginBottom: moderateScale(10) }}>{strings.WE_ARE_HAPPY_TO_SEE}</Text>
                                </View>
                                <View>
                                    <TextInputComp
                                        value={email}
                                        placeholder={strings.EMAIL}
                                        onChangeText={text => setEmail(text)}
                                    />
                                    <TextInputComp
                                        value={password}
                                        placeholder={strings.PASSWORD}
                                        onChangeText={text => setPassword(text)}
                                        secureTextEntry={secureText}
                                        secureText={secureText ? strings.SHOW : strings.HIDE}
                                        onPressSecure={() => setSecureText(!secureText)}
                                    />
                                </View>
                            </View>
                            <View style={{ gap: moderateScale(300) }}>
                                <View>
                                    <Text style={{
                                        ...styles.textStyle, alignSelf: 'flex-end',
                                        color: colors.blueColor
                                    }}>{strings.FORGOT_PASSWORD}</Text>
                                </View>
                                <View style={{ flexGrow: 0.2 }} >
                                    <ButtonComp text={strings.LOGIN} />
                                </View>
                            </View>


                        </View>



                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </WrapperContainer>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: colors.whiteColor,
        fontFamily: fontFamily.bold,
    },
});
