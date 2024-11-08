//import liraries
import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Container, Text, StatusBar, useTheme, Icon, AppButton } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

// create a component
const ThankYouPage = () => {
    const colors = useTheme()
    return (
        <Container>
            <StatusBar
                backgroundColor={colors.secondaryThemeColor}
                barStyle='dark-content'
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
                        height: moderateScale(30)
                    }}
                    />
                    <View
                        style={{
                            alignSelf: 'center',
                            marginVertical: moderateScale(20)
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/Thankyou.gif')}
                            resizeMode='contain'
                            style={{
                                height: moderateScale(171),
                                width: moderateScale(171)
                            }}
                        />
                    </View>

                    <Text style={styles.heading_txt}>Thanks For <Text
                        style={{
                            color: colors.primaryThemeColor
                        }}
                    >
                        choosing</Text> us</Text>

                    {[1, 2, 3].map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={styles.horizontalView}
                            >
                                <View
                                    style={{
                                        width: '10%',
                                    }}
                                >
                                    <Icon
                                        name='check'
                                        type='AntDesign'
                                        color={colors.primaryThemeColor}
                                    />
                                </View>

                                <View
                                    style={{
                                        marginLeft: moderateScale(10),
                                        width: '90%',
                                    }}
                                >
                                    <Text style={styles.title_txt}>Lorem ipsum dolor sit amet </Text>
                                    <Text style={styles.sub_txt}>Lorem ipsum dolor sit amet consectetur. Et quis in risus fames cras pulvinar.</Text>
                                </View>
                            </View>
                        )
                    })}
                    <View 
                    style={{
                        flex:1
                    }}
                    />
                    <AppButton 
                    title='Continue'
                    style={styles.app_btn_style}
                    textStyle={{...styles.app_btn_txt_style,
                    color: colors.secondaryThemeColor
                    }}
                    onPress={() => NavigationService.navigate('FillProfile')}
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
        flex:1
    },
    heading_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(20),
        textAlign: 'center',
        marginVertical: moderateScale(10)
    },
    horizontalView: {
        flexDirection: 'row',
        marginTop: moderateScale(10)
    },
    title_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(15)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13)
    },
    app_btn_style:{
        justifyContent:'center',
        alignItems: 'center',
        marginHorizontal: 0,
        marginVertical: moderateScale(15),
        height: moderateScale(60),
        borderRadius: moderateScale(30)
    },
    app_btn_txt_style:{
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    }
});

//make this component available to the app
export default ThankYouPage;
