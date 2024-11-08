//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, Picker, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Image } from 'react-native';
import moment from 'moment';
import NavigationService from '../../Services/Navigation';

// create a component
const Personalnformation = () => {
    const colors = useTheme()
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [BirthDate, setBirthDate] = useState(null)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setBirthDate(moment(date).format("MMM Do YY"))
        hideDatePicker();
        console.log("BirthDate", BirthDate);
    };
    return (
        <Container>
            <BackHeader
                title={'Personal Information'}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1
                }}
            >
                <View
                    style={styles.main_view}
                >
                    <AppTextInput
                        placeholder='Jason Carsel'
                        inputContainerStyle={{
                            ...styles.inputContainerStyle,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)',
                            height: moderateScale(58),
                        }}
                        style={{
                            ...styles.app_txt_style,

                        }}
                    />

                    <View
                        style={{
                            ...styles.date_of_birth_view,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)',
                            paddingHorizontal: moderateScale(10)

                        }}
                    >
                        <Text style={styles.date_txt}>{BirthDate ? BirthDate : 'Date Of Birth'}</Text>
                        <Pressable
                            onPress={showDatePicker}
                        >
                            <Image
                                source={require('../../Assets/images/clarity_date-line.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(24),
                                    width: moderateScale(24)
                                }}
                            />
                        </Pressable>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>

                    <View
                        style={{
                            ...styles.date_of_birth_view,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)'
                        }}
                    >
                        <Picker
                            containerStyle={styles.pickerBox}
                            placeholder='Gender'
                            options={[
                                {
                                    label: 'Female',
                                    value: 'Female'
                                },
                                {
                                    label: 'Male',
                                    value: 'Male'
                                }
                            ]}
                        />
                    </View>

                    <AppTextInput
                        placeholder='Email'
                        inputContainerStyle={{
                            ...styles.app_txt_container_style,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)',
                            height: moderateScale(58),
                        }}
                        style={styles.app_txt_style}
                        mainContainerStyle={{
                            marginTop: moderateScale(10)
                        }}
                        rightAction={
                            <Icon
                                name='email-outline'
                                type='MaterialCommunityIcon'
                                color={'rgba(45, 45, 45, 0.5)'}
                            />
                        }
                    />
                    <AppTextInput
                        placeholder='Occupation'
                        inputContainerStyle={{
                            ...styles.app_txt_container_style,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)',
                            height: moderateScale(58),

                        }}
                        style={styles.app_txt_style}
                        mainContainerStyle={{
                            marginTop: moderateScale(10)
                        }}
                    />


                    <AppTextInput
                        multiline={true}
                        numberOfLines={8}
                        textAlignVertical='top'
                        placeholder='Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam'
                        inputContainerStyle={{
                            ...styles.app_txt_container_style,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)'
                        }}
                        style={styles.app_txt_style}
                        mainContainerStyle={{
                            marginTop: moderateScale(10)
                        }}
                    />
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
                    onPress={() => NavigationService.navigate('UploadPhotos')}
                />
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
    inputContainerStyle: {
        borderWidth: 0,
        height: moderateScale(65),
        paddingHorizontal: moderateScale(5)
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        width: '80%'
    },
    date_of_birth_view: {
        height: moderateScale(60),
        width: '100%',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    date_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        color: '#999'
    },
    pickerBox: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 0
    },
    app_txt_container_style: {
        paddingHorizontal: moderateScale(10),
        borderWidth: 0
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        width: '90%'
    },
    app_btn_style: {
        marginHorizontal: moderateScale(15),
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
export default Personalnformation;
