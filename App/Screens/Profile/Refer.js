//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppButton, Container, Icon, Text, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { Image } from 'react-native';

// create a component
const Refer = () => {
    const colors = useTheme()
    const referArr = [
        {
            img: require('../../Assets/images/whatsapp.png'),
        },
        {
            img: require('../../Assets/images/facebook1.png'),
        },
        {
            img: require('../../Assets/images/twitter.png'),
        },
    ]
    return (
        <Container>
            <BackHeader
                title={'Refer'}
            />
            <View
                style={styles.main_view}
            >
                <Text style={styles.heading_txt}>REFER & EARN</Text>

                <Image
                    source={require('../../Assets/images/giftbox.gif')}
                    resizeMode='contain'
                    style={{
                        height: moderateScale(192),
                        width: moderateScale(192),
                        alignSelf: 'center'
                    }}
                />
                <Text style={{
                    ...styles.your_refferal_code,
                    color: 'rgba(45, 45, 45, 0.7)'
                }}>YOUR REFERRAL CODE</Text>

                <View
                    style={{
                        ...styles.app_btn_style,
                        backgroundColor: 'rgba(247, 74, 129, 0.2)',
                        borderColor: colors.primaryThemeColor,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: moderateScale(20)
                    }}>
                    <Text
                        style={{
                            ...styles.app_btn_txt_style,
                            color: colors.primaryThemeColor
                        }}>
                        QU12345678910123
                    </Text>
                    <Icon
                        name='copy'
                        type='Feather'
                        color={colors.primaryThemeColor}
                    />
                </View>

                <Text style={{
                    ...styles.share_txt,
                    color: 'rgba(45, 45, 45, 0.7)'
                }}>Share your code</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        // alignSelf:'center',
                        marginTop:moderateScale(30)
                    }}>
                    {referArr.map((item, index) => (
                        <Image
                            key={index}
                            source={item.img}
                            style={{
                                height:moderateScale(35),
                                width:moderateScale(35)
                            }}
                        />
                        
                    ))}
                </View>

                {/* <AppButton
                    title='Delete Account'
                    style={{
                        ...styles.app_btn_delete_style,
                    }}
                    textStyle={{...styles.app_btn_delete_txt_style,
                    color: colors.secondaryThemeColor
                    }}
                /> */}
            </View>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    heading_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(18),
        textAlign: 'center',
        lineHeight: 40
    },
    your_refferal_code: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        textAlign: 'center'
    },
    app_btn_style: {
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: moderateScale(10),
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: moderateScale(8),
        marginVertical: moderateScale(15),
        marginHorizontal: moderateScale(25)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    },
    share_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        textAlign: 'center'
    },
    app_btn_delete_style: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(30),
        height: moderateScale(58),
        borderRadius: moderateScale(30)
    },
    app_btn_delete_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    }
});

//make this component available to the app
export default Refer;
