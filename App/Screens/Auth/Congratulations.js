//import liraries
import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { AppButton, Container, Text, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const Congratulations = () => {
    const colors = useTheme()
    return (
        <Container>
            <View
                style={styles.main_view}
            >
                <View
                    style={{
                        alignSelf: 'center',
                        height: height / 2,
                        marginTop: moderateScale(30)
                    }}
                >
                    <Image
                        source={require('../../Assets/images/congratulations.gif')}
                        resizeMode='contain'
                        style={{
                            height: moderateScale(300),
                            width: moderateScale(300)
                        }}
                    />
                </View>
                <Text style={{
                    ...styles.cong_txt,
                    color: '#F74A81'
                }}>Congratulations!</Text>
                <Text style={{
                    ...styles.sub_txt,
                    color: colors.secondaryFontColor
                }}>Lorem ipsum dolor sit amet consectetur. Purus sit gravida purus cursus.</Text>

                <View
                    style={{
                        flex: 1
                    }}
                />
                <AppButton
                    title='Go to home'
                    style={styles.app_btn_style}
                    textStyle={{
                        ...styles.app_btn_txt_style,
                        color: colors.secondaryThemeColor
                    }}
                    onPress={() => NavigationService.navigate('AppStack')}
                />

            </View>

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
    cong_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(20),
        textAlign: 'center'
    },
    sub_txt:
    {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        textAlign: 'center',
        marginTop: moderateScale(10)
    },
    app_btn_style: {
        marginHorizontal: 0,
        marginVertical: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(55),
        borderRadius: moderateScale(30)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(15)
    }
});

//make this component available to the app
export default Congratulations;
