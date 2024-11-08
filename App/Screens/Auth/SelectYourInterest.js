//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { AppButton, Container, Icon, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

// create a component
const SelectYourInterest = () => {
    const colors = useTheme()
    const [chooseData, setChooseData] = useState([
        {
            interest_name: 'Gaming',
            img: require('../../Assets/images/choosepreference/game.png'),
            status: true
        },
        {
            interest_name: 'Book & Novel',
            img: require('../../Assets/images/choosepreference/book.png'),
            status: true
        },
        {
            interest_name: 'Painting',
            img: require('../../Assets/images/choosepreference/Painting.png'),
            status: true
        },
        {
            interest_name: 'Movie',
            img: require('../../Assets/images/choosepreference/Movie.png'),
            status: true
        },
        {
            interest_name: 'Nature & Plant',
            img: require('../../Assets/images/choosepreference/NaturePlant.png'),
            status: true
        },
        {
            interest_name: 'Fashion',
            img: require('../../Assets/images/choosepreference/Fashion.png'),
            status: true
        },
        {
            interest_name: 'Animals',
            img: require('../../Assets/images/choosepreference/Animals.png'),
            status: true
        },
        {
            interest_name: 'Writing',
            img: require('../../Assets/images/choosepreference/Writing.png'),
            status: true
        },
        {
            interest_name: 'Travel',
            img: require('../../Assets/images/choosepreference/Travel.png'),
            status: true
        },
        {
            interest_name: 'Song',
            img: require('../../Assets/images/choosepreference/Song.png'),
            status: true
        },
        {
            interest_name: 'Food & Drink',
            img: require('../../Assets/images/choosepreference/FoodDrink.png'),
            status: true
        },
        {
            interest_name: 'Society',
            img: require('../../Assets/images/choosepreference/Society.png'),
            status: true
        },
        {
            interest_name: 'Gym & Fitness',
            img: require('../../Assets/images/choosepreference/GymFitness.png'),
            status: true
        },
        {
            interest_name: 'Shopping',
            img: require('../../Assets/images/choosepreference/Shopping.png'),
            status: true
        },
        {
            interest_name: 'People',
            img: require('../../Assets/images/choosepreference/People.png'),
            status: true
        },
        {
            interest_name: 'Art',
            img: require('../../Assets/images/choosepreference/Art.png'),
            status: true
        },

    ])
    return (
        <Container>
            <BackHeader title='Select Your Preference' type='interest' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.main_view}
                >
                    <View
                        style={styles.horizontal_view}
                    >
                        {chooseData.map((item, index) => {
                            return (
                                <Pressable
                                    onPress={() => setChooseData(s => s.map(it => it.interest_name == item.interest_name ? { ...it, status: !it.status } : it))}
                                    style={{
                                        ...styles.box_view,
                                        backgroundColor: item.status ? 'transparent' : colors.primaryThemeColor,
                                        borderWidth: item.status ? 1 : 0,
                                        borderColor: item.status ? colors.primaryThemeColor : null,

                                    }}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode='contain'
                                        style={styles.img_style}
                                    />
                                    <Text style={{
                                        ...styles.interest_txt,
                                        color: item.status ? colors.primaryThemeColor : colors.secondaryThemeColor
                                    }}>{item.interest_name}</Text>
                                </Pressable>
                            )
                        })}



                    </View>
                    <View
                        style={{ flex: 1 }}
                    />
                    <AppButton
                        title='Continue'
                        style={styles.app_btn_style}
                        textStyle={{
                            ...styles.app_btn_txt_style,
                            color: colors.secondaryThemeColor
                        }}
                        onPress={() => NavigationService.navigate('Filter')}
                    />
                </View>
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    box_view: {
        height: moderateScale(46),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(23),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: moderateScale(10),
        marginTop: moderateScale(10)
    },
    img_style: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    interest_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13),
        paddingHorizontal: moderateScale(10)
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
        fontSize: moderateScale(14)
    }
});

//make this component available to the app
export default SelectYourInterest;
