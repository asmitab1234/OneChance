//import liraries
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Container, Text, StatusBar, useTheme, AppButton } from 'react-native-basic-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

// create a component
const OTPVerification = () => {
    const colors = useTheme()
    return (
        <Container>
            <StatusBar
                backgroundColor={colors.secondaryThemeColor}
                barStyle='dark-content'
            />
            <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.main_view}
                >
                    <View
                        style={{
                            alignSelf: 'center',
                            marginTop: moderateScale(40)
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/logo.png')}
                            resizeMode='contain'
                            style={{
                                height: moderateScale(83),
                                width: moderateScale(308)
                            }}
                        />
                    </View>

                    <Text style={styles.start_txt}>Put your <Text style={{ color: colors.primaryThemeColor }}>4 digit</Text> code</Text>
                    <Text style={{
                        ...styles.sub_txt,
                        color: colors.secondaryFontColor
                    }}>It will be send on your phone number</Text>
                    <Text style={{
                        ...styles.time_txt,
                        color: colors.primaryThemeColor
                    }} >02:00 Sec</Text>

                    <AppButton
                        title='Resend'
                        style={{
                            ...styles.app_btn_style,
                            backgroundColor: colors.secondaryThemeColor,
                            borderColor: colors.borderColor
                        }}
                        textStyle={styles.app_btn_txt_style}
                    />

                    <View
                        style={{
                            marginHorizontal: moderateScale(20),
                        }}
                    >
                        <OTPInputView
                            style={{
                                height: moderateScale(100)
                            }}
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={{
                                ...styles.underlineStyleBase,
                                color: colors.primaryFontColor
                            }}
                            codeInputHighlightStyle={{
                                borderColor: colors.primaryThemeColor
                            }}
                        />
                    </View>

                    <AppButton
                        title='Sign in'
                        style={styles.app_btn_for_sign_in_style}
                        textStyle={{
                            ...styles.app_btn_for_sign_txt_style,
                            color: colors.secondaryThemeColor
                        }}
                        onPress={() => NavigationService.navigate('ThankYouPage')}
                    />

                </View>
            </KeyboardAwareScrollView>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    start_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(22),
        textAlign: 'center',
        marginTop: moderateScale(10)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        textAlign: 'center',
        marginHorizontal: moderateScale(20),
        marginVertical: moderateScale(10)
    },
    time_txt: {
        textAlign: 'center',
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    app_btn_style: {
        height: moderateScale(40),
        marginHorizontal: 0,
        width: moderateScale(88),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: moderateScale(10),
        borderWidth: 1
    },
    app_btn_txt_style: {
        lineHeight: 18,
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
    },
    underlineStyleBase: {
        width: 50,
        height: 45,
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        alignItems: 'center',
        justifyContent: 'center'
    },
    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    app_btn_for_sign_in_style: {
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(60),
        borderRadius: moderateScale(30),
        marginVertical: moderateScale(20)

    },
    app_btn_for_sign_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    }
});

//make this component available to the app
export default OTPVerification;
