//import liraries
import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { useTheme, Text,  } from 'react-native-basic-elements';
import { FONTS } from '../../../Constants/Fonts';
import { moderateScale } from '../../../Constants/PixelRatio';

// create a component
const HeaderImage = () => {
    const colors = useTheme()
    return (
        <View>
            <Text style={styles.heading_txt}>One Chance <Text
                style={{
                    color: colors.primaryThemeColor
                }}
            > Premium</Text></Text>
            <Image
                source={require('../../../Assets/images/flashnote.png')}
                resizeMode='contain'
                style={{
                    height: moderateScale(98),
                    width: moderateScale(98),
                    alignSelf: 'center',
                    marginTop: moderateScale(10)
                }}
            />

            <Text style={styles.send_txt}>Send flash note</Text>
            <Text style={{
                ...styles.sub_txt,
                color: colors.secondaryFontColor
            }}>Lorem ipsum is a visual form commonly used</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    heading_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(17),
        textAlign: 'center'
    },
    send_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(17),
        textAlign: 'center',
        marginTop: moderateScale(10)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        textAlign: 'center',
    },
});

//make this component available to the app
export default HeaderImage;
