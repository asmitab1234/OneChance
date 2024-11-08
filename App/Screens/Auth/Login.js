//import liraries
import React, { Component, useRef, useState } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Container, Text, StatusBar, useTheme, AppButton, CheckBox } from 'react-native-basic-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-number-input';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

// create a component
const Login = () => {
    const colors = useTheme()
    const phoneInput = useRef < PhoneInput > (null);
    const [value, setValue] = useState("");
    const [check, setCheck] = useState(false);
    return (
        <Container>
            <StatusBar
                backgroundColor={colors.pageBackgroundColor}
                barStyle='dark-content'
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
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

                <Text style={styles.start_txt}>Start <Text style={{ color: colors.primaryThemeColor }}>your</Text> journey</Text>
                <Text style={styles.sub_txt}>Lorem ipsum dolor sit amet consectetur.{"\n"} Integer pellentesque nibh aliquet ut tristique.</Text>

                <View
                    style={styles.main_view}
                >

                    <View style={{
                        // alignItems: 'center',
                        marginVertical: moderateScale(15)
                    }}>
                        <PhoneInput
                            useRef={phoneInput}
                            defaultValue={value}
                            layout="first"
                            containerStyle={{
                                backgroundColor: colors.pageBackgroundColor,
                                borderRadius: moderateScale(10),
                                width: '100%',
                                borderColor: colors.borderColor,
                                height: moderateScale(60),
                                elevation: 2
                            }}

                            textContainerStyle={{
                                backgroundColor: 'transparent',
                                paddingLeft: 3

                            }}
                            textInputStyle={{
                                fontFamily: FONTS.regular,
                                paddingBottom: -10,
                                fontSize: moderateScale(11)
                            }}
                            countryPickerButtonStyle={{

                                marginTop: 5
                            }}
                            flagButtonStyle={{
                                paddingBottom: -25
                            }}
                            codeTextStyle={{
                                fontFamily: FONTS.regular,
                                marginTop: 10,
                                fontSize: moderateScale(12)
                            }}

                            maxLength={10}
                            placeholder='Continue with Phone Number'

                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginTop: 20,
                        alignItems: 'center'
                    }}>
                        <View
                            style={{
                                flex: 1,
                                borderTopWidth: 0.5,
                                height: 0,
                                borderStyle: 'solid',
                                borderColor: colors.borderColor
                            }}
                        />

                        <Text style={{
                            color: colors.secondaryFontColor,
                            fontSize: 14,
                            fontFamily: FONTS.light,
                            marginHorizontal: 10,
                            // opacity: 1
                        }}>or</Text>


                        <View
                            style={{
                                flex: 1,
                                borderTopWidth: 0.5,
                                height: 0,
                                borderStyle: 'solid',
                                borderColor: colors.borderColor
                                // marginRight: 20
                            }}
                        />
                    </View>

                    <View
                        style={{
                            ...styles.google_btn,
                            backgroundColor: colors.secondaryThemeColor
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/google.png')}
                            resizeMode='contain'
                            style={styles.google_img}
                        />
                        <Text style={styles.social_media_txt}>Continue with Google</Text>
                    </View>

                    <View
                        style={{
                            ...styles.google_btn,
                            backgroundColor: colors.secondaryThemeColor
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/facebook.png')}
                            resizeMode='contain'
                            style={styles.google_img}
                        />
                        <Text style={styles.social_media_txt}>Continue with Facebook</Text>
                    </View>

                    <AppButton
                        title='Sign in'
                        style={styles.app_btn_style}
                        textStyle={{
                            ...styles.app_btn_txt_style,
                            color: colors.secondaryThemeColor
                        }}
                        onPress={() => NavigationService.navigate('OTPVerification')}
                    />

                    <View
                        style={styles.terms_condition_view}
                    >
                        <CheckBox
                            checked={check}
                            onChange={(val) => setCheck(val)}
                            size={25}
                            containerStyle={{
                                borderWidth:1
                            }}
                            activeColor={colors.primaryThemeColor}
                        />
                        <Text style={styles.agree_txt}>Do you  agreed our <Text
                        style={{
                            color: colors.primaryThemeColor
                        }}
                        >Terms & Condition </Text>Policy </Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>


        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
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
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    google_btn: {
        height: moderateScale(60),
        width: '100%',
        elevation: 2,
        borderRadius: moderateScale(10),
        marginTop: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    google_img: {
        height: moderateScale(28),
        width: moderateScale(26)
    },
    social_media_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        marginLeft: moderateScale(10)
    },
    app_btn_style: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        marginVertical: moderateScale(30),
        height: moderateScale(58),
        borderRadius: moderateScale(30)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    terms_condition_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(15),
        marginBottom: moderateScale(20)
    },
    agree_txt:{
     fontFamily: FONTS.regular,
     fontSize: moderateScale(11),
     marginLeft: moderateScale(10)   
    }
});

//make this component available to the app
export default Login;
