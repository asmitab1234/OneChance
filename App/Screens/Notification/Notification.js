//import liraries
import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AppButton, Container, Text, useTheme, } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import NotificationListCard from '../../Components/Notification/NotificationListCard';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';

// create a component
const Notification = () => {
    const colors = useTheme()
    const todayData = [
        {
            image: require('../../Assets/images/user1.png'),
            text: 'Lorem Ipsum Send you connection request ',
            type: 'connection request',
            time: '2 min ago'
        },
        {
            image: require('../../Assets/images/notification1.png'),
            text: 'Lorem ipsum dolor sit amet consectetur. Metus suspendisse in at sit rhoncus.',
            type: 'notification',
            time: '10 min ago'
        },
        {
            image: require('../../Assets/images/user2.png'),
            text: 'Lorem Ipsum Send you connection request ',
            type: 'connection request',
            time: '5 min ago'
        }
    ]
    const yesterdayData = [
        {
            image: require('../../Assets/images/user1.png'),
            text: 'Lorem ipsum dolor sit amet consectetur. Metus suspendisse in at sit rhoncus.',
            type: 'notification',
            time: '2 min ago'
        },
        {
            image: require('../../Assets/images/notification2.png'),
            text: 'Lorem ipsum dolor sit amet consectetur. Metus suspendisse in at sit rhoncus.',
            type: 'notification',
            time: '10 min ago'
        },
        {
            image: require('../../Assets/images/user3.png'),
            text: 'Lorem ipsum dolor sit amet consectetur. Metus suspendisse in at sit rhoncus.',
            type: 'notification',
            time: '5 min ago'
        },
        {
            image: require('../../Assets/images/notification2.png'),
            text: 'Lorem ipsum dolor sit amet consectetur. Metus suspendisse in at sit rhoncus.',
            type: 'notification',
            time: '10 min ago'
        },
    ]
    return (
        <Container>
            <BackHeader title='Notification' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                // style={styles.main_view}
                >
                    <Text style={styles.day_txt}>Today</Text>
                    {todayData.map((item, index) => {
                        return (
                            <NotificationListCard
                                item={item}
                            />
                        )
                    })}
                    <Text style={{...styles.day_txt,
                    marginTop: moderateScale(10)
                    }}>Yesterday</Text>
                    {yesterdayData.map((item, index) => {
                        return (
                            <NotificationListCard
                                item={item}
                            />
                        )
                    })}
                </View>
                <View 
                style={{
                    height: moderateScale(20)
                }}
                />
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    // main_view: {
    //     marginHorizontal: moderateScale(15),
    //     marginTop: moderateScale(10)
    // },
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
        marginTop: moderateScale(10)
    },
    img_style: {
        height: moderateScale(60),
        width: moderateScale(60),
        borderRadius: moderateScale(35)
    },
    text_style: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
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
export default Notification;
