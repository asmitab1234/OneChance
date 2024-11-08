//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { AppButton, Container, Icon, Text, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

// create a component
const SexualOrientation = () => {
    const colors = useTheme()
    const [select, setSelect] = useState('')
    const [selectData, setselectData] = useState([
        {
            label: 'Straight',
            status: false,
        },
        {
            label: 'Gay',
            status: false,
        },
        {
            label: 'Lesbian',
            status: false,
        },
        {
            label: 'Bisexual',
            status: false,
        },
        {
            label: 'Asexual',
            status: false,
        },
        {
            label: 'Queen',
            status: false,
        },
        {
            label: 'Questioning',
            status: false,
        }
    ])
    return (
        <Container>
            <BackHeader title='Sexual Orientation' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.main_view}
                >
                    <Text style={{
                        ...styles.select_txt,
                        color: 'rgba(45, 45, 45, 0.5)'
                    }}>Select up to 3</Text>

                    {selectData.map((item, index) => {
                        return (
                            <Pressable
                                onPress={() => setselectData(s => s.map(it => it.label == item.label ? { ...it, status: !it.status } : it))}
                                style={{
                                    ...styles.box_view,
                                    backgroundColor: 'rgba(45, 45, 45, 0.05)'
                                }}
                            >
                                <Text style={{
                                    ...styles.choose_orientation_txt,
                                    color: item.status ? colors.primaryThemeColor : colors.secondaryFontColor
                                }}>{item.label}</Text>
                                {item.status ?
                                    <Icon
                                        name='check'
                                        type='Feather'
                                        color={colors.primaryThemeColor}
                                    />
                                    : null
                                }

                            </Pressable>
                        )
                    })}
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
                        onPress={() => NavigationService.navigate('SelectYourInterest')}
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
    select_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    box_view: {
        height: moderateScale(58),
        width: '100%',
        borderRadius: moderateScale(15),
        marginTop: moderateScale(10),
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    choose_orientation_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(14)
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
export default SexualOrientation;
