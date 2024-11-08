//import liraries
import React, { Component, useCallback, useState } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, Text, useTheme, } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
// import { RangeSlider } from 'rn-range-slider';
import Rail from '../../Components/Slider/Rail';
import Thumb from '../../Components/Slider/Thumb';
import RailSelected from '../../Components/Slider/RailSelected';
import Label from '../../Components/Slider/Label';
import Notch from '../../Components/Slider/Notch';
import Slider from 'rn-range-slider';
import NavigationService from '../../Services/Navigation';

// create a component
const Filter = () => {
    const colors = useTheme()
    const [select, setSelect] = useState('')
    const typeData = [
        {
            value: 'Men'
        },
        {
            value: 'Women'
        },
        {
            value: 'Everyone'
        }
    ]
    const [rangeDisabled, setRangeDisabled] = useState(false);
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(100);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [floatingLabel, setFloatingLabel] = useState(false);

    const renderThumb = useCallback(() => <Thumb />,
        [],
    );
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((lowValue, highValue) => {
        setLow(lowValue);
        setHigh(highValue);
    }, []);
    const toggleRangeEnabled = useCallback(
        () => setRangeDisabled(!rangeDisabled),
        [rangeDisabled],
    );
    const setMinTo50 = useCallback(() => setMin(50), []);
    const setMinTo0 = useCallback(() => setMin(0), []);
    const setMaxTo100 = useCallback(() => setMax(100), []);
    const setMaxTo500 = useCallback(() => setMax(500), []);
    const toggleFloatingLabel = useCallback(
        () => setFloatingLabel(!floatingLabel),
        [floatingLabel],
    );

    return (
        <Container>
            <BackHeader title='Filter' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.main_view}
                >
                    <Text style={styles.heading_txt}>My Preference -</Text>

                    <View
                        style={styles.horizontal_view}
                    >
                        {typeData.map((item, index) => {
                            return (
                                <Pressable
                                    onPress={() => setSelect(index)}
                                    style={{
                                        ...styles.box_view,
                                        borderColor: index == select ? colors.primaryThemeColor : colors.borderColor
                                    }}
                                >
                                    <Text style={{
                                        ...styles.type_txt,
                                        color: index == select ? colors.primaryThemeColor : '#5F5F5F'
                                    }}>{item.value}</Text>
                                </Pressable>
                            )
                        })}

                    </View>
                    <Text style={styles.age_txt}>Age -</Text>

                    <View>

                        <Slider
                            style={{
                                ...styles.slider,
                            }}
                            min={min}
                            max={max}
                            step={1}
                            disableRange={rangeDisabled}
                            floatingLabel={floatingLabel}
                            renderThumb={renderThumb}
                            renderRail={renderRail}
                            renderRailSelected={renderRailSelected}
                            renderLabel={renderLabel}
                            renderNotch={renderNotch}
                            onValueChanged={handleValueChange}
                        />
                    </View>


                    <Text style={styles.age_txt}>Location -</Text>
                    <AppTextInput
                        placeholder='Kolkata'
                        mainContainerStyle={{
                            marginTop: moderateScale(10)
                        }}
                        inputContainerStyle={{
                            ...styles.app_txt_input_cont,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)',
                            borderWidth: 0
                        }}
                        rightAction={<Icon
                            name='my-location'
                            type='MaterialIcon'
                            color={colors.borderColor}
                        />}
                        style={styles.app_txt_style}
                    />

                    <Text style={{
                        ...styles.age_txt,
                        marginTop: moderateScale(15)
                    }}>Surrounding Area -</Text>

                    <View>

                        <Slider
                            style={{
                                ...styles.slider,
                            }}
                            min={min}
                            max={max}
                            step={1}
                            disableRange={rangeDisabled}
                            floatingLabel={floatingLabel}
                            renderThumb={renderThumb}
                            renderRail={renderRail}
                            renderRailSelected={renderRailSelected}
                            renderLabel={renderLabel}
                            renderNotch={renderNotch}
                            onValueChanged={handleValueChange}
                        />
                    </View>

                    <View
                        style={{
                            flex: 1
                        }}
                    />

                    <AppButton
                        title='Countinue'
                        style={styles.app_btn_style}
                        textStyle={{
                            ...styles.app_btn_txt_style,
                            color: colors.secondaryThemeColor
                        }}
                        onPress={() => NavigationService.navigate('SelectYourIdealMatch')}
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
    slider: {
        marginBottom: 10
    },
    heading_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    box_view: {
        height: moderateScale(42),
        width: moderateScale(100),
        borderWidth: 1,
        marginVertical: moderateScale(20),
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    type_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12)
    },
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    age_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    app_txt_input_cont: {
        paddingHorizontal: moderateScale(10),
        height: moderateScale(58)
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        width: '90%'
    },
    app_btn_style: {
        height: moderateScale(55),
        borderRadius: moderateScale(30),
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateScale(20)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },

});

//make this component available to the app
export default Filter;
