//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Container, Text, useTheme, } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { Image } from 'react-native';
import NavigationService from '../../Services/Navigation';

// create a component
const Questions = () => {
    const colors = useTheme()
    const brandData = [
        {
            img: require('../../Assets/images/amazon.png'),
        },
        {
            img: require('../../Assets/images/adidas.png'),
        },
        {
            img: require('../../Assets/images/Uber.png'),
        },
        {
            img: require('../../Assets/images/SignalFire.png'),
        },
    ]
    return (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1
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
                            ...styles.question_background_view,
                            backgroundColor: '#FFDBE6'
                        }}
                    >
                        <Text style={{
                            ...styles.heading_txt,
                        }}>To win the points by {"\n"}
                            answering all 5 questions correctly</Text>

                        <View
                            style={{
                                ...styles.select_view,
                                backgroundColor: colors.primaryThemeColor
                            }}
                        >
                            <Text style={{
                                ...styles.brand_txt,
                                color: colors.secondaryThemeColor
                            }}>Select Brand</Text>
                        </View>

                        <View
                            style={{
                                ...styles.brand_options_box,
                                backgroundColor: colors.secondaryThemeColor
                            }}
                        >

                            <View
                                style={styles.horizontal_view}
                            >
                                {brandData.map((item, index) => {
                                    return (
                                        <Pressable
                                        onPress={() => NavigationService.navigate('BrandQuestion')}
                                            key={index}
                                            style={{
                                                ...styles.box_view,
                                                backgroundColor: colors.secondaryThemeColor
                                            }}
                                        >
                                            <Image
                                                source={item.img}
                                                resizeMode='contain'
                                                style={{
                                                    height: moderateScale(36),
                                                    width: moderateScale(90)
                                                }}
                                            />
                                        </Pressable>
                                    )
                                })}
                            </View>


                        </View>
                    </View>
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
        marginTop: moderateScale(10),
        flex: 1
    },
    question_background_view: {
        flex: 1,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(10)
    },
    heading_txt: {
        textAlign: 'center',
        fontFamily: FONTS.regular,
        fontSize: moderateScale(14),
    },
    select_view: {
        height: moderateScale(64),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        borderTopLeftRadius: moderateScale(10),
        borderTopRightRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    brand_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    brand_options_box: {
        marginHorizontal: moderateScale(15),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(10)
    },
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // borderWidth:1
    },
    box_view: {
        height: moderateScale(106),
        width: moderateScale(120),
        elevation: 7,
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(10)
    }
});

//make this component available to the app
export default Questions;
