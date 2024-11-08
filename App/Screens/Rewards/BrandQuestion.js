//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { AppButton, Card, Container, Text, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const BrandQuestion = () => {
    const colors = useTheme()
    return (
        <Container>
            <BackHeader
                title={'Rewards'}
            />

            <View
                style={styles.main_view}
            >
                <View
                    style={{
                        height: moderateScale(30)
                    }}
                />
                <View
                    style={{
                        ...styles.question_background_view,
                        backgroundColor: '#FFDBE6',
                        justifyContent: 'flex-end',

                    }}
                >
                    <View
                        style={{
                            ...styles.question_view,
                            backgroundColor: colors.secondaryThemeColor
                        }}
                    >
                        <Text style={styles.que_view}>Q1</Text>
                    </View>
                    <Text style={styles.que_txt}>In publishing and graphic design,
                        placeholder text   _______</Text>

                    {[1, 2, 3].map((item, index) => {
                        return (
                            <Card
                                style={{
                                    ...styles.que_card,
                                    backgroundColor: colors.secondaryThemeColor,
                                    marginTop: moderateScale(20)
                                }}
                            >
                                <Text
                                    style={styles.ans_txt}
                                >Lorem Ipsum</Text>
                            </Card>
                        )
                    })}

                    <AppButton
                        title='Countinue'
                        style={styles.app_btn_style}
                        textStyle={{
                            ...styles.app_btn_txt_style,
                            color: colors.secondaryThemeColor
                        }}
                        onPress={() => NavigationService.navigate('CongratulationsRewards')}
                    />
                </View>
            </View>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: moderateScale(10),
        marginTop: moderateScale(10),
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    question_background_view: {
        borderRadius: moderateScale(20),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(10),
        marginBottom: moderateScale(40),
        width: width - 30
    },
    question_view: {
        height: moderateScale(56),
        width: moderateScale(56),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(28)
    },
    que_view: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    },
    que_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(15),
        marginTop: moderateScale(15)
    },
    que_card: {
        height: moderateScale(50),
        justifyContent: 'center'
    },
    ans_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13)
    },
    app_btn_style: {
        height: moderateScale(60),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: moderateScale(0),
        marginVertical: moderateScale(30)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    }
});

//make this component available to the app
export default BrandQuestion;
