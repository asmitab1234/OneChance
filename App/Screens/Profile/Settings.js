//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { AppTextInput, Text, Container, Icon, useTheme, AppButton } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';
import Modal from "react-native-modal";
import { Image } from 'react-native';

const { height, width } = Dimensions.get('window')
// create a component
const Settings = () => {
    const colors = useTheme()
    const [isModalVisible, setModalVisible] = useState(false);
    const [isdeleteModalVisible, setdeleteModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const toggleDeleteModal = () => {
        setdeleteModalVisible(!isdeleteModalVisible);
    };

    return (
        <Container>
            <BackHeader
                title={'Settings'}
            />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
            >
                <View
                    style={{
                        ...styles.other_view,
                        backgroundColor: '#F5F5F5'
                    }}
                >
                    <View
                        style={styles.main_view}
                    >
                        <Text
                            style={styles.account_setting_txt}
                        >
                            Account Setting
                        </Text>
                        <AppTextInput
                            placeholder='91 123456789'
                            inputContainerStyle={{
                                ...styles.inputContainerStyle,
                                backgroundColor: colors.secondaryThemeColor
                            }}
                            rightAction={
                                <Icon
                                    name='edit'
                                    type='MaterialIcon'
                                />
                            }
                            style={styles.app_txt_style}
                        />

                        <View
                            style={{
                                ...styles.box_view,
                                backgroundColor: colors.secondaryThemeColor
                            }}
                        >
                            <Text style={{
                                ...styles.preferred_txt,
                                // color: colors.borderColor
                            }}>Preferred Languages</Text>
                            <View
                                style={styles.horizontal_view}
                            >
                                <Text style={{
                                    ...styles.language_txt,
                                    color: colors.borderColor
                                }}>English</Text>
                                <Icon
                                    name='plus-box-multiple-outline'
                                    type='MaterialCommunityIcon'
                                    color={colors.borderColor}
                                />
                            </View>
                        </View>

                        <View
                            style={{
                                ...styles.box_view,
                                backgroundColor: colors.secondaryThemeColor
                            }}
                        >
                            <Text style={{
                                ...styles.privacy_txt,

                            }}>Privacy</Text>
                            <Text style={{
                                ...styles.privacy_txt,
                                color: colors.borderColor
                            }}>Privacy Policy</Text>
                            <Text style={{
                                ...styles.privacy_txt,
                                color: colors.borderColor,
                                marginBottom: moderateScale(10)
                            }}>Terms & Condition</Text>
                        </View>
                        {/* <View
                            style={{
                                flex: 1
                            }}
                        /> */}
                        <AppButton
                            title='Refer & Earn'
                            style={{
                                ...styles.app_btn_style,
                                backgroundColor: colors.secondaryThemeColor
                            }}
                            textStyle={styles.app_btn_txt_style}
                            onPress={() => NavigationService.navigate('Refer')}
                        />
                        <AppButton
                            title='Delete Account'
                            style={{
                                ...styles.app_btn_style,
                                backgroundColor: colors.secondaryThemeColor
                            }}
                            textStyle={styles.app_btn_txt_style}
                            onPress={toggleDeleteModal}
                        />
                        <AppButton
                            title='Logout'
                            style={styles.app_btn_refer_style}
                            textStyle={{
                                ...styles.app_btn_refer_txt_style,
                                color: colors.secondaryThemeColor
                            }}
                            onPress={toggleModal}
                        />

                    </View>
                </View>
            </ScrollView>
            {/* logout modal */}
            <Modal
                isVisible={isModalVisible}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
                statusBarTranslucent={true}
                style={{
                    justifyContent: 'flex-end',
                    marginHorizontal: moderateScale(0),
                    marginBottom: moderateScale(0),
                }}
            >
                <View style={{
                    ...styles.modal_view_logout,
                    backgroundColor: colors.secondaryThemeColor
                }}>
                    <Text style={{
                        ...styles.heading_txt,
                        color: '#FF0000'
                    }}>Logout</Text>
                    <View
                        style={{
                            ...styles.border_line,
                            backgroundColor: colors.borderColor
                        }}
                    />
                    <Text style={styles.title_txt}>Are you sure you want to log out ?</Text>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <View
                        style={{
                            ...styles.horizontal_view,
                            marginTop: moderateScale(20)
                        }}
                    >
                        <AppButton
                            title='Cancel'
                            style={{
                                ...styles.app_btn_cancel,
                                backgroundColor: colors.borderColor
                            }}
                            textStyle={{
                                ...styles.app_btn_cancel_txt_style,
                                color: colors.secondaryThemeColor
                            }}
                        />
                        <AppButton
                            title='Yes, Logout'
                            style={{
                                ...styles.app_btn_cancel,
                            }}
                            textStyle={{
                                ...styles.app_btn_cancel_txt_style,
                                color: colors.secondaryThemeColor
                            }}
                        />
                    </View>
                </View>
            </Modal>
            {/* Delete modal */}
            <Modal
                isVisible={isdeleteModalVisible}
                onBackButtonPress={() => setdeleteModalVisible(false)}
                onBackdropPress={() => setdeleteModalVisible(false)}
                statusBarTranslucent={true}
                style={{
                    justifyContent: 'flex-end',
                    marginHorizontal: moderateScale(0),
                    marginBottom: moderateScale(0),
                }}
            >
                <View
                    style={{
                        ...styles.deleteModal,
                        backgroundColor: colors.secondaryThemeColor,
                        height: height / 3
                    }}
                >
                    <View
                        style={{
                            ...styles.delete_icon_style,
                            backgroundColor: colors.primaryThemeColor
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/delete.png')}
                            resizeMode='contain'
                            style={{
                                height: moderateScale(28),
                                width: moderateScale(25)
                            }}
                        />
                    </View>
                    <Text style={styles.alert_msg_text_delete}>Are you sure you want to delete {"\n"} your account ?</Text>

                    <View
                        style={{
                            ...styles.horizontal_view,
                            marginTop: moderateScale(20)
                        }}
                    >
                        <AppButton
                            title='Cancel'
                            style={{
                                ...styles.app_btn_cancel,
                                backgroundColor: colors.borderColor
                            }}
                            textStyle={{
                                ...styles.app_btn_cancel_txt_style,
                                color: colors.secondaryThemeColor
                            }}
                        />
                        <AppButton
                            title='Delete Account'
                            style={{
                                ...styles.app_btn_cancel,
                            }}
                            textStyle={{
                                ...styles.app_btn_cancel_txt_style,
                                color: colors.secondaryThemeColor
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    other_view: {
        flex: 1,
        borderTopLeftRadius: moderateScale(30),
        borderTopRightRadius: moderateScale(30),
        marginTop: moderateScale(20)
    },
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        flex: 1
    },
    inputContainerStyle: {
        borderWidth: 0,
        height: moderateScale(58),
        paddingLeft: moderateScale(10),
        justifyContent: 'space-between'
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        width: '80%'
    },
    box_view: {
        // height: moderateScale(101),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15),
        paddingHorizontal: moderateScale(10),
        paddingTop: moderateScale(10)
    },
    preferred_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13)
    },
    horizontal_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: moderateScale(15)
    },
    language_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12)
    },
    privacy_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13)
    },
    app_btn_style: {
        justifyContent: 'center',
        marginHorizontal: 0,
        marginVertical: moderateScale(10)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13),
        marginLeft:moderateScale(15)
    },
    app_btn_refer_txt_style:{
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13),
    },
    app_btn_refer_style: {
        width: moderateScale(120),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal:0
    },
    account_setting_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13)
    },
    modal_view_logout: {
        borderTopLeftRadius: moderateScale(30),
        borderTopRightRadius: moderateScale(30),
        paddingVertical: moderateScale(15),
        paddingHorizontal: moderateScale(15),
        // flex:1
    },
    heading_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16),
        textAlign: 'center'
    },
    border_line: {
        height: 1,
        marginVertical: moderateScale(10)
    },
    title_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(15),
        textAlign: 'center',
        marginHorizontal: moderateScale(15)
    },
    app_btn_cancel: {
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(55),
        width: moderateScale(158),
        borderRadius: moderateScale(30)
    },
    app_btn_cancel_txt_style: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12)
    },
    deleteModal: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(15),
        borderTopLeftRadius: moderateScale(30),
        borderTopRightRadius: moderateScale(30)
    },
    alert_msg_text_delete: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13),
        textAlign: 'center',
        marginTop: moderateScale(30)
    },
    delete_icon_style: {
        height: moderateScale(60),
        width: moderateScale(60),
        borderRadius: moderateScale(37),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: moderateScale(-40),
        alignSelf: 'center'
    }


});

//make this component available to the app
export default Settings;
