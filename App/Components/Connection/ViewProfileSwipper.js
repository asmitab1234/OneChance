//import liraries
import React, { Component, useRef, useState } from 'react';
import { Dimensions, Image, Pressable } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, useTheme } from 'react-native-basic-elements';
import Swiper from 'react-native-swiper';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';
const { height, width } = Dimensions.get('window')

// create a component
const ViewProfileSwipper = () => {
    const swiperRef = useRef(null);
    const colors = useTheme()
    const [index, setIndex] = useState(0)
    return (
        <View
            style={{
                height: height / 1.5
            }}
        >
            <Swiper
                paginationStyle={{
                    bottom: moderateScale(50),
                }}
                loop={false}
                ref={swiperRef}
                autoplay={false}
                activeDotColor={colors.primaryThemeColor}
                onIndexChanged={(index) => setIndex(index)}

                dotStyle={{
                    backgroundColor: colors.secondaryThemeColor,
                }}
                // onScroll={(i)=> console.log(i)}
                activeDotStyle={{
                    backgroundColor: colors.primaryThemeColor,
                    height: moderateScale(7),
                    width: moderateScale(28),
                    borderRadius: moderateScale(30),
                    marginHorizontal: 2,
                }}

            >
                <View style={styles.slide1}>
                    <View
                        style={styles.back_btn}
                    >
                        <Pressable
                            onPress={() => NavigationService.back()}
                        >
                            <Icon
                                name='arrow-back'
                                type='Ionicon'
                            />
                        </Pressable>

                    </View>

                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        // resizeMode='contain'
                        style={{
                            height: height / 1,
                            width: width,
                            borderRadius: moderateScale(20)
                        }}
                    />
                </View>

                <View style={styles.slide1}>
                    <View
                        style={styles.back_btn}
                    >
                        <Icon
                            name='arrow-back'
                            type='Ionicon'
                        />
                    </View>

                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1680061826732-936f66de75d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                        resizeMode='cover'
                        style={{
                            height: height / 1,
                            width: width
                        }}
                    />
                </View>

                <View style={styles.slide1}>
                    <View
                        style={styles.back_btn}
                    >
                        <Icon
                            name='arrow-back'
                            type='Ionicon'
                        />
                    </View>

                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1680402077396-a58b60ed0ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' }}
                        resizeMode='cover'
                        style={{
                            height: height / 1,
                            width: width
                        }}
                    />
                </View>
            </Swiper>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    back_btn: {
        position: 'absolute',
        zIndex: 9999,
        top: moderateScale(30),
        left: moderateScale(15)
    },
});

//make this component available to the app
export default ViewProfileSwipper;
