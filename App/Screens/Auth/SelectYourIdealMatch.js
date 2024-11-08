//import liraries
import React, { Component, useState } from 'react';
import { Image, Pressable } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { AppButton, Container, Icon, useTheme } from 'react-native-basic-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

// create a component
const SelectYourIdealMatch = () => {
    const colors = useTheme()
    const [select, setSelect] = useState('')
    const matchData = [
        {
            match_type: 'Relationship',
            img: require('../../Assets/images/heart.png')

        },
        {
            match_type: 'Casual Friend',
            img: require('../../Assets/images/casual.png')
        },
        {
            match_type: 'Hook up',
            img: require('../../Assets/images/hook.png')
        },
        // {
        //     match_type: 'Marriage',
        //     img: require('../../Assets/images/DiamondRing.png')
        // }
    ]
    return (
        <Container>
            <BackHeader title='Select Your Ideal Match' />
            <View
                style={styles.main_view}
            >
                <View
                    style={styles.horizontal_view}
                >
                    {matchData.map((item, index) => {
                        return (
                            <Pressable
                                onPress={() => setSelect(index)}
                                key={index}
                                style={{
                                    ...styles.box_view,
                                    borderColor: index == select ? colors.primaryThemeColor : colors.borderColor
                                }}
                            >
                                <View
                                    style={{
                                        ...styles.circle_view,
                                        backgroundColor: index == select ? 'rgba(255, 33, 104, 0.2)' : 'rgba(45, 45, 45, 0.5)'
                                    }}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode='contain'
                                        style={{
                                            height: moderateScale(18),
                                            width: moderateScale(18)
                                        }}
                                    />
                                </View>

                                <Text style={{
                                    ...styles.realtionship_txt,
                                    color: index == select ? colors.primaryThemeColor : colors.secondaryFontColor
                                }}>{item.match_type}</Text>
                            </Pressable>
                        )
                    })}

                </View>
                <View
                    style={{
                        flex: 1
                    }}
                />

                <AppButton
                    title='Continue'
                    style={styles.app_btn_style}
                    textStyle={{
                        ...styles.app_btn_txt_style,
                        color: colors.secondaryThemeColor
                    }}
                    onPress={() => NavigationService.navigate('Congratulations')}
                />
            </View>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    box_view: {
        height: moderateScale(215),
        width: moderateScale(155),
        borderRadius: moderateScale(20),
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(10)

    },
    circle_view: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(24),
        justifyContent: 'center',
        alignItems: 'center'
    },
    realtionship_txt: {
        marginTop: moderateScale(10),
        fontFamily: FONTS.regular,
        fontSize: moderateScale(14)
    },
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
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
        fontSize: moderateScale(16)
    }
});

//make this component available to the app
export default SelectYourIdealMatch;
