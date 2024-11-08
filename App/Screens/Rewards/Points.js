//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, ImageBackground, FlatList, ScrollView } from 'react-native';
import { AppButton, Card, Container, Text, useTheme, } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

const { height, width } = Dimensions.get('window')
// create a component
const Points = () => {
    const colors = useTheme()
    const restroData = [
        {
            image: require('../../Assets/images/ccd.png'),
            name: 'Cafe Coffe Day'
        },
        {
            image: require('../../Assets/images/kfc.png'),
            name: 'Cafe Coffe Day'
        },
        {
            image: require('../../Assets/images/starbucks.png'),
            name: 'Cafe Coffe Day'
        },
        {
            image: require('../../Assets/images/amazon.png'),
            name: 'Cafe Coffe Day'
        }
    ]
    return (
        <Container>
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
                    style={styles.horizontal_view_for_points}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/star.png')}
                            resizeMode='contain'
                            style={{
                                height: moderateScale(46),
                                width: moderateScale(46)
                            }}
                        />

                        <Text style={{
                            ...styles.total_rewards_txt,
                            color: colors.borderColor
                        }}>Total Rewards</Text>
                    </View>

                    <Text style={{ ...styles.tottal_points }}>300 points</Text>
                </View>
            </View>
            <View
                style={{
                    ...styles.works_view,
                    backgroundColor: '#FFDBE6'
                }}
            >
                <AppButton
                    title='How it works'
                    style={styles.app_btn_style}
                    textStyle={{
                        ...styles.app_btn_txt_style,
                        color: colors.secondaryThemeColor
                    }}
                />
                {restroData.map((item, index) => {
                    return (
                        <ImageBackground
                        key={index}
                            source={require('../../Assets/images/reward_bg.png')}
                            style={{
                                height: moderateScale(71),
                                marginBottom: moderateScale(10)
                            }}
                        >
                            <View
                                style={{
                                    paddingHorizontal: moderateScale(15),
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: moderateScale(10)
                                }}
                            >
                                <View
                                    style={styles.horizontal_view_restro_view}
                                >
                                    <Image
                                        source={item.image}
                                        resizeMode='contain'
                                        style={{
                                            height: moderateScale(49),
                                            width: moderateScale(34)
                                        }}
                                    />
                                    <View
                                        style={{
                                            marginLeft: moderateScale(10)
                                        }}
                                    >
                                        <Text style={styles.restro_name_txt}>{item.name}</Text>
                                        <Text style={styles.discount_text}>5% discount </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: moderateScale(10)
                                    }}
                                >
                                    <Text style={{
                                        ...styles.point_txt,
                                        color: '#058011'
                                    }}>+360</Text>
                                    <Text style={{
                                        ...styles.pt_txt,
                                        color: '#058011'
                                    }}>Points</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    )
                })}
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
        // flex:1
    },
    horizontal_view_for_points: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    total_rewards_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(15),
        marginLeft: moderateScale(10)
    },
    tottal_points: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(15)
    },
    works_view: {
        flex: 1,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        marginTop: moderateScale(20),
        paddingHorizontal: moderateScale(15),
        marginHorizontal: moderateScale(15)
    },
    app_btn_style: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateScale(20),
        height: moderateScale(56),
        marginHorizontal: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    horizontal_view_for_cards: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    horizontal_view_restro_view: {
        flexDirection: 'row',
        // alignItems: 'center'
    },
    restro_name_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    discount_text: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12)
    },
    point_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    },
    pt_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10)
    }
});

//make this component available to the app
export default Points;
