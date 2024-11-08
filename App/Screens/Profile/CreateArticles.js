//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppButton, AppTextInput, Container, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

// create a component
const CreateArticles = () => {
    const  colors = useTheme()
    return (
        <Container>
            <BackHeader
                title={'Create Article '}
            />
            <View
                style={styles.main_view}
            >
                <AppTextInput
                    multiline={true}
                    numberOfLines={8}
                    textAlignVertical='top'
                    placeholder='Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam'
                    inputContainerStyle={styles.inputContainerStyle}
                    style={styles.app_txt_style}
                />

                <AppButton
                    title='Post'
                    style={styles.app_btn_styles}
                    textStyle={{...styles.app_btn_txt_style,
                    color: colors.secondaryThemeColor
                    }}
                />
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
    inputContainerStyle: {
        paddingLeft: moderateScale(5)
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12)
    },
    app_btn_styles: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        marginVertical: moderateScale(20),
        height: moderateScale(60),
        borderRadius: moderateScale(30)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    }
});

//make this component available to the app
export default CreateArticles;
