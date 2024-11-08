//import liraries
import React, { Component, useState } from 'react';
import { Image, Pressable } from 'react-native';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, Picker, useTheme, Text } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationService from '../../Services/Navigation';

// create a component
const FillProfile = () => {
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
    const [dropdownValue, setDropdownValue] = useState('');
    return (
        <Container>
            <BackHeader title='Fill Your Profile' />
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.main_view}
                >
                    <AppTextInput
                        placeholder='Full name'
                        inputContainerStyle={{
                            ...styles.app_txt_container_style,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)'
                        }}
                        inputStyle={styles.app_txt_style}
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
                            placeholder='Gender'
                            textStyle={{
                                fontSize: 15
                            }}
                            selectedValue={dropdownValue}
                            onValueChange={(val) => setDropdownValue(val)}
                            containerStyle={styles.pickerBox}
                      
                        />
                    </View>

                    <AppTextInput
                        placeholder='Email'
                        inputContainerStyle={{
                            ...styles.app_txt_container_style,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)'
                        }}
                        inputStyle={styles.app_txt_style}
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
                            backgroundColor: 'rgba(45, 45, 45, 0.05)'
                        }}
                        inputStyle={styles.app_txt_style}
                        mainContainerStyle={{
                            marginTop: moderateScale(10)
                        }}
                    />
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


                </View>
            </KeyboardAwareScrollView>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        flex: 1
    },
    app_txt_container_style: {
        paddingHorizontal: moderateScale(10),
        height: moderateScale(58),
        borderWidth: 0
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        width: '90%'
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
export default FillProfile;
