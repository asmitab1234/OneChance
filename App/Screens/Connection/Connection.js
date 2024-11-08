//import liraries
import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AppButton, Container, Text, useTheme, } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import ConnectionRequestCard from '../../Components/Connection/ConnectionRequestCard';

// create a component
const Connection = () => {
    const colors = useTheme()
    const todayData = [
        {
            img: require('../../Assets/images/user.png'),
            time: '2 min ago'
        },
        {
            img: require('../../Assets/images/request.png'),
            time: '5 min ago'
        },
        {
            img: require('../../Assets/images/request1.png'),
            time: '22 min ago'
        },

    ]
    const yesterdayData = [
        {
            img: require('../../Assets/images/request2.png'),
            time: '19 hrs ago'
        },
        {
            img: require('../../Assets/images/request.png'),
            time: '19 hrs ago'
        },
        {
            img: require('../../Assets/images/request3.png'),
            time: '22 hrs ago'
        },
        {
            img: require('../../Assets/images/request1.png'),
            time: '23 hrs ago'
        },

    ]
    return (
        <Container>
            <BackHeader title='Connention Request' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.main_view}
                >
                    <Text style={styles.day_text}>Today</Text>
                    {todayData.map((item, index) => {
                        return (
                            <View
                                key={index}
                            >
                                <ConnectionRequestCard item={item} />
                            </View>

                        )
                    })}
                    <Text style={styles.day_text}>Yesterday</Text>

                    {yesterdayData.map((item, index) => {
                        return (
                            <View
                                key={index}
                            >
                                <ConnectionRequestCard item={item} />
                            </View>
                        )
                    })}

                    <View
                        style={{
                            height: moderateScale(20)
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
        marginTop: moderateScale(10)
    },
    day_text: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
});

//make this component available to the app
export default Connection;
