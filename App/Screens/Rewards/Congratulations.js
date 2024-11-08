//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AppButton, Container, Text, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { Image } from 'react-native';
import { FONTS } from '../../Constants/Fonts';

// create a component
const Congratulations = () => {
    const colors = useTheme()
    return (
        <Container>
            <BackHeader
                title={'Rewards'}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow:1
                }}
            >
                <View
                    style={styles.main_view}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/congratulation.gif')}
                            resizeMode='contain'
                        />

                        <Text style={{
                            ...styles.Congratulations_txt,
                            color: colors.primaryThemeColor
                        }}>Congratulations!</Text>

                        <Text style={{
                            ...styles.sub_txt,
                            color: colors.secondaryFontColor
                        }}>You have just got</Text>
                        
                        <Text style={{
                            ...styles.number_txt,
                            color: colors.primaryThemeColor
                        }}>2</Text>

                        <Text style={styles.point_txt}>Points</Text>


                    </View>

                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <AppButton
                        title='View Point'
                        style={styles.app_btn_style}
                        textStyle={{...styles.app_btn_txt_style,
                        color: colors.secondaryThemeColor
                        }}
                    />
                </View>
            </ScrollView>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        flex: 1
    },
    Congratulations_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(22)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(15)
    },
    number_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(30),
        // borderWidth:1
    },
    point_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(15),
        // lineHeight: moderateScale(40)
    },
    app_btn_style: {
        marginHorizontal: 0,
        height: moderateScale(60),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(20)

    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    }

});

//make this component available to the app
export default Congratulations;
