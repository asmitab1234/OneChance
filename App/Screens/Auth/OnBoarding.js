//import liraries
import React, { Component, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { AppButton, Text, Container, StatusBar, useTheme } from 'react-native-basic-elements';
import Swiper from 'react-native-swiper';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const OnBoarding = () => {
    const colors = useTheme()
    const swiperRef = useRef(null);
    const [index, setIndex] = useState(0)
    // const imageData = [
    //     {
    //         image: require('../../Assets/images/onboard.png'),
    //         title: `It’s easy to find sole mate ${"\n"} nearby & around you`,
    //         sub_title: 'Lorem ipsum dolor sit amet consectetur. Orci congue at mollis dui sit auctor ullamcorper eleifend nunc.'
    //     },
    //     {
    //         image: require('../../Assets/images/onboard1.png'),
    //         title: 'Chat with the strangers & make them your partner',
    //         sub_title: 'Chat with the strangers & make them your partner'
    //     },
    //     {
    //         image: require('../../Assets/images/onboard2.png'),
    //         title: 'Choose your partners of same interest',
    //         sub_title: 'Lorem ipsum dolor sit amet consectetur. Orci congue at mollis dui sit auctor ullamcorper eleifend nunc.'
    //     },
    // ]
    return (
        <Container>
            <StatusBar
                translucent={true}
                barStyle='dark-content'
                backgroundColor={'transparent'}
            />
            {/* <ScrollView> */}
                <Swiper
                    paginationStyle={{ 
                        bottom: 5,
                    }}
                    loop={false}
                    ref={swiperRef}
                    autoplay={false}
                    activeDotColor={colors.primaryThemeColor}
                    onIndexChanged={(index) => setIndex(index)}

                    dotStyle={{
                        backgroundColor: '#ACADAC',
                    }}
                    // onScroll={(i)=> console.log(i)}
                    activeDotStyle={{
                        backgroundColor: colors.primaryThemeColor,
                        height: 6,
                        width: 17,
                        borderRadius: 3,
                        marginHorizontal: 2,
                    }}

                >
                        <View>
                            <Text
                                style={styles.skip_style}
                            >
                                Skip
                            </Text>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    source={require('../../Assets/images/onboard.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: height > 700 ? height / 1.7 : height/2.1,
                                        width: moderateScale(280)
                                    }}
                                />
                            </View>
                          
                                <Text
                                    style={{
                                        ...styles.title_style,
                                        marginBottom: moderateScale(10)
                                    }}
                                >It’s easy to find <Text
                                    style={{
                                        color: colors.primaryThemeColor,
                                    }}
                                >sole mate</Text> {"\n"} nearby & <Text
                                    style={{
                                        color: colors.primaryThemeColor
                                    }}
                                >around</Text> you</Text>

                                <Text
                                    style={{
                                        ...styles.sub_title_style,
                                        color: colors.secondaryFontColor
                                    }}
                                >Lorem ipsum dolor sit amet consectetur. Orci congue at mollis dui sit auctor ullamcorper eleifend nunc.</Text>
                            
                        </View>

                        <View>
                            <Text
                                style={styles.skip_style}
                            >
                                Skip
                            </Text>
                            <View
                                style={{
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // height: height / 2.2
                                }}
                            >
                                <Image
                                    source={require('../../Assets/images/onboard2.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: height > 700 ? height / 1.7 : height/2.1,
                                        width: moderateScale(250)
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    ...styles.title_style,
                                    marginBottom: moderateScale(10)
                                }}
                            >Chat with the <Text
                                style={{
                                    color: colors.primaryThemeColor,
                                }}
                            >strangers </Text><Text>&</Text> {"\n"} make them <Text
                                style={{
                                    color: colors.primaryThemeColor
                                }}
                            >your partner</Text></Text>

                            <Text
                                style={{
                                    ...styles.sub_title_style,
                                    color: colors.secondaryFontColor
                                }}
                            >Lorem ipsum dolor sit amet consectetur. Orci congue at mollis dui sit auctor ullamcorper eleifend nunc.</Text>

                        </View>


                        <View>
                            <Text
                                style={styles.skip_style}
                            >
                                Skip
                            </Text>
                            <View
                                style={{
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    source={require('../../Assets/images/onboard1.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: height > 700 ? height / 1.7 : height/2.1,
                                        width: moderateScale(250)
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    ...styles.title_style,
                                    marginBottom: moderateScale(10)
                                }}
                            >Choose your <Text
                                style={{
                                    color: colors.primaryThemeColor,
                                }}
                            >partners </Text><Text>of</Text> {"\n"} same <Text
                                style={{
                                    color: colors.primaryThemeColor
                                }}
                            >interest</Text></Text>

                            <Text
                                style={{
                                    ...styles.sub_title_style,
                                    color: colors.secondaryFontColor
                                }}
                            >Lorem ipsum dolor sit amet consectetur. Orci congue at mollis dui sit auctor ullamcorper eleifend nunc.</Text>

                        </View>
                </Swiper>
            {/* </ScrollView> */}
            <AppButton
                title='Next'
                style={styles.app_btn_style}
                textStyle={{
                    ...styles.app_btn_txt_style,
                    color: colors.secondaryThemeColor
                }}
                onPress={() => {
                    index >= 2 ?
                        NavigationService.navigate('Login')
                        :
                        swiperRef.current.scrollBy(index + 1)
                }}
            />

        </Container>

    );
};

// define your styles
const styles = StyleSheet.create({
    svgCurve: {
        position: 'absolute',

    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer: {
        marginTop: 50,
        marginHorizontal: 10
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 35
    },
    title_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(19),
        textAlign: 'center',
        // marginTop: moderateScale(10),
        marginHorizontal: moderateScale(30)
    },
    sub_title_style: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        textAlign: 'center',
        // marginTop: moderateScale(5),
        marginHorizontal: moderateScale(10)
    },
    app_btn_txt_style: {

        fontFamily: FONTS.medium,
        fontSize: moderateScale(12)
    },
    app_btn_style: {
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(58),
        borderRadius: moderateScale(30),
        marginVertical: moderateScale(20),
        // alignSelf: 'flex-end'
    },
    skip_style: {
        marginTop: moderateScale(10)
    },
    skip_style: {
        textAlign: 'right',
        marginTop: moderateScale(35),
        marginRight: moderateScale(10),
        fontFamily: FONTS.regular,
        fontSize: moderateScale(14)
    }
});

//make this component available to the app
export default OnBoarding;