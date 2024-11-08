//import liraries
import React, { Component } from 'react';
import { Image, Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { AppButton, Text, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

// create a component
const ConnectionRequestCard = ({ item }) => {
    const colors = useTheme()
    return (
        <Pressable

            style={styles.horizontal_view}
        >
            <Pressable
                onPress={() => NavigationService.navigate('ViewProfile',{type:'connection request'})}
            >
                <Image
                    source={item.img}
                    resizeMode='contain'
                    style={{
                        height: moderateScale(66),
                        width: moderateScale(66),
                        borderRadius: moderateScale(33)
                    }}
                />
            </Pressable>

            <View
                style={{
                    flex: 1,
                    marginLeft: moderateScale(10)
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <Text
                        numberOfLines={2}
                        style={styles.request_txt}>Lorem Ipsum Send you connection request </Text>
                    <Text style={{
                        ...styles.time_txt,
                        color: colors.secondaryFontColor,
                        marginRight: moderateScale(5)
                    }}>{item.time}</Text>
                </View>

                <View
                    style={styles.horizontal_view_for_btn}
                >
                    <AppButton
                        title='Accept'
                        style={styles.app_btn_style}
                        textStyle={{
                            ...styles.app_btn_txt_style,
                            color: colors.secondaryThemeColor
                        }}
                    />
                    <AppButton
                        title='Reject'
                        style={{
                            ...styles.app_btn_style,
                            backgroundColor: 'rgba(84, 84, 84, 0.5)',
                            marginLeft: moderateScale(10)
                        }}
                        textStyle={{
                            ...styles.app_btn_txt_style,
                            color: colors.secondaryThemeColor
                        }}
                    />
                </View>
            </View>
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({

    horizontal_view: {
        flexDirection: 'row',
        marginTop: moderateScale(15)
    },
    request_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        flex: 1
    },
    horizontal_view_for_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginTop: moderateScale(5)

    },
    time_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10),
    },
    app_btn_style: {
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: moderateScale(90),
        height: moderateScale(31)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12)
    }
});

//make this component available to the app
export default ConnectionRequestCard;
