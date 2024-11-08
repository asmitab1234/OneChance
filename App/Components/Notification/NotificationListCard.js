//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { AppButton, Text, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';

// create a component
const NotificationListCard = ({item}) => {
    const colors = useTheme()
    return (
        <View
            style={{
                backgroundColor: item.type == 'connection request' ? 'rgba(247, 74, 129, 0.15)' : 'transparent',
                paddingVertical: item.type == 'notification' ? 0 :moderateScale(10),
                marginVertical: item.type == 'notification' ?  moderateScale(5) : moderateScale(10),
                // borderWidth:1
            }}
        >
            <View
                style={{
                    ...styles.horizontal_view,

                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                        }}
                    >
                        <Image
                            source={item.image}
                            resizeMode='cover'
                            style={styles.img_style}
                        />
                    </View>

                    <View
                        style={{
                            width: '60%',
                            marginLeft: moderateScale(10),
                        }}
                    >
                        <Text
                            numberOfLines={3}
                            style={styles.text_style}>{item.text}</Text>
                        {item.type == 'connection request' ?
                            <AppButton
                                title='See Now'
                                style={styles.app_btn_style}
                                textStyle={{
                                    ...styles.app_btn_txt_style,
                                    color: colors.secondaryThemeColor
                                }}
                            />
                            :
                            null
                        }

                    </View>
                </View>
                <Text style={{
                    ...styles.time_txt,
                    color: colors.secondaryFontColor
                }}>{item.time}</Text>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    day_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(15),
        marginHorizontal: moderateScale(15)
    },
    horizontal_view: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(15),
    },
    img_style: {
        height: moderateScale(60),
        width: moderateScale(60),
        borderRadius: moderateScale(35)
    },
    text_style: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        maxWidth: '100%',
    },
    time_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10)
    },
    app_btn_style: {
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(31),
        width: moderateScale(103),
        marginTop: moderateScale(10)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10)
    }
});

//make this component available to the app
export default NotificationListCard;
