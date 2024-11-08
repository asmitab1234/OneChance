//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Container, Text, Icon, useTheme, AppTextInput, AppButton, Card } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import Gallery from '../../Components/Connection/Gallery';
import ArticleCard from '../../Components/Profile/ArticleCard';
import NavigationService from '../../Services/Navigation';
import Modal from "react-native-modal";

// create a component
const Profile = () => {
    const colors = useTheme()
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const chooseData = [
        {
            interest_name: 'Gaming',
            img: require('../../Assets/images/choosepreference/game.png'),
            status: true
        },
        {
            interest_name: 'Book & Novel',
            img: require('../../Assets/images/choosepreference/book.png'),
            status: true
        },
        {
            interest_name: 'Painting',
            img: require('../../Assets/images/choosepreference/Painting.png'),
            status: true
        },
        {
            interest_name: 'Fashion',
            img: require('../../Assets/images/choosepreference/Fashion.png'),
            status: true
        },

    ]
    return (
        <Container>
            <BackHeader
                title={'About Profile'}
                type={'profile'}
                toggleModal={() => toggleModal()}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.main_view}
                >
                    <View
                        style={{
                            alignSelf: 'center'
                        }}
                    >
                        <View
                            style={{
                                ...styles.outer_circle,
                                borderColor: colors.primaryThemeColor,
                            }}
                        >
                            <View
                                style={{
                                    ...styles.camera_circle,
                                    backgroundColor: colors.secondaryThemeColor
                                }}
                            >
                                <Icon
                                    name='camera'
                                    type='Feather'
                                    color={colors.primaryThemeColor}
                                />
                            </View>
                            <Image
                                source={require('../../Assets/images/about_profile.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(158),
                                    width: moderateScale(158)
                                }}
                            />

                            <View
                                style={{
                                    ...styles.complete_view,
                                    backgroundColor: colors.primaryThemeColor
                                }}
                            >
                                <Text style={{
                                    ...styles.complete_txt,
                                    color: colors.secondaryThemeColor
                                }}>95% COMPLETE</Text>
                            </View>
                        </View>
                    </View>
                    <Text
                        style={styles.name_txt}
                    >Jason Carsel</Text>
                    <Text
                        style={styles.designer_txt}
                    >Designer</Text>
                    <Text style={styles.bio_txt}>Add Bio</Text>

                    <Pressable
                        onPress={() => NavigationService.navigate('Personalnformation')}
                        style={{
                            ...styles.edit_profile_btn,
                            backgroundColor: 'rgba(234, 230, 230, 0.5)'
                        }}
                    >
                        <Icon
                            name='edit'
                            type='MaterialIcon'
                        />
                        <Text style={{ ...styles.edit_txt }}>Edit profile</Text>
                    </Pressable>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Pressable
                        onPress={() => NavigationService.navigate('Subscription')}
                            style={{
                                ...styles.flash_note_box,
                                backgroundColor: 'rgba(255, 234, 241, 1)'
                            }}
                        >
                            <Image
                                source={require('../../Assets/images/flashnote.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(24),
                                    width: moderateScale(24)
                                }}
                            />

                            <Text style={styles.flash_note_txt}>Subscription</Text>
                        </Pressable>

                        <View
                            style={{
                                ...styles.flash_note_box,
                                backgroundColor: 'rgba(226, 226, 251, 1)'
                            }}
                        >
                            <Image
                                source={require('../../Assets/images/boostnow.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(24),
                                    width: moderateScale(24)
                                }}
                            />

                            <Text style={styles.flash_note_txt}>Boost Now</Text>
                        </View>
                    </View>

                    <Text style={styles.about_txt}>About Me</Text>
                    <Text style={{
                        ...styles.sub_txt,
                        color: colors.secondaryFontColor
                    }}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed doeiusmod tempor incididunt
                        ut labore et dolore magna aliqua.Ut enim ad
                        minim veniam</Text>
                    <View
                        style={styles.horizontal_view_for_interest}
                    >
                        <Text style={styles.about_txt}>Interest</Text>
                        <View
                            style={{
                                ...styles.edit_btn_view,
                                backgroundColor: colors.secondaryFontColor
                            }}
                        >
                            <Icon
                                name='edit'
                                type='MaterialIcon'
                                color={colors.secondaryThemeColor}
                                size={15}
                            />
                            <Text style={{
                                ...styles.edit_txt,
                                color: colors.secondaryThemeColor
                            }}>Edit</Text>
                        </View>
                    </View>

                    <View
                        style={styles.horizontal_view_for_interest_options}
                    >
                        {chooseData.map((item, index) => {
                            return (
                                <Pressable
                                    style={{
                                        ...styles.box_view,
                                        backgroundColor: colors.primaryThemeColor,
                                    }}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode='contain'
                                        style={styles.img_style}
                                    />
                                    <Text style={{
                                        ...styles.interest_txt,
                                        color: colors.secondaryThemeColor
                                    }}>{item.interest_name}</Text>
                                </Pressable>
                            )
                        })}

                    </View>

                    <Text style={styles.about_txt}>Articles</Text>
                    <AppTextInput
                        numberOfLines={5}
                        placeholder='Write an articles'
                        textAlignVertical='top'
                        multiline={true}
                        inputContainerStyle={styles.inputContainerStyle}
                        style={styles.app_txt_style}
                        onPressIn={() => NavigationService.navigate('CreateArticles')}
                    />

                    {/* Gallery */}
                    <View
                        style={styles.horizontal_view_for_interest}
                    >
                        <Text style={styles.about_txt}>Gallery</Text>

                        <AppButton
                            title='Add Image'
                            style={{
                                ...styles.app_btn_style,
                                backgroundColor: colors.secondaryFontColor
                            }}
                            textStyle={{
                                ...styles.app_btn_txt_style,
                                color: colors.secondaryThemeColor
                            }}
                            buttonIcon={{
                                name: 'image-outline',
                                type: 'Ionicon',
                                position: 'left',
                                color: colors.secondaryThemeColor,
                                size: 15
                            }}
                            onPress={() => NavigationService.navigate('AddImage')}
                        />
                    </View>

                    <Gallery
                        type='userProfile'

                    />

                    {/* Articles */}
                    <Text style={styles.about_txt}>My Articles</Text>
                    <ArticleCard />
                </View>
            </ScrollView>


            <Modal 
            onBackdropPress={() => setModalVisible(false)}
            onBackButtonPress={() => setModalVisible(false)}
            isVisible={isModalVisible}
            statusBarTranslucent={true}
            >
                <View style={{...styles.modal_view,
                backgroundColor:  colors.secondaryThemeColor
                }}>
                    <Text style={styles.heading_txt}>Need Help ?</Text>
                    <Text
                    style={styles.sub_txt}
                    >Contact Us</Text>
                    <Text
                    style={styles.sub_txt}
                    >See FAQ</Text>
                </View>
            </Modal>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    outer_circle: {
        height: moderateScale(176),
        width: moderateScale(176),
        borderRadius: moderateScale(88),
        borderWidth: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    camera_circle: {
        height: moderateScale(42),
        width: moderateScale(42),
        borderRadius: moderateScale(21),
        position: 'absolute',
        top: moderateScale(15),
        right: moderateScale(5),
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8
    },
    complete_view: {
        height: moderateScale(27),
        position: 'absolute',
        zIndex: 9999,
        bottom: -2,
        width: moderateScale(143),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignItems: 'center'
    },
    complete_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13),
        marginTop: moderateScale(2)
    },
    name_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16),
        textAlign: 'center',
        marginTop: moderateScale(10)
    },
    designer_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        textAlign: 'center'
    },
    bio_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(11),
        textAlign: 'center'
    },
    edit_profile_btn: {
        height: moderateScale(30),
        width: moderateScale(110),
        borderRadius: moderateScale(5),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        flexDirection: 'row',
        // alignItems: 
    },
    edit_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        marginLeft: moderateScale(5)
    },
    flash_note_box: {
        height: moderateScale(70),
        width: moderateScale(155),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15),
        justifyContent: 'center',
        alignItems: 'center'
    },
    flash_note_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        marginTop: moderateScale(5)
    },
    about_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(15),
        marginVertical: moderateScale(15)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
    },
    horizontal_view_for_interest: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    edit_txt_interest: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10)
    },
    edit_btn_view: {
        height: moderateScale(25),
        width: moderateScale(55),
        borderRadius: moderateScale(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    horizontal_view_for_interest_options: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    box_view: {
        height: moderateScale(44),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(23),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: moderateScale(10),
        marginTop: moderateScale(10)
    },
    img_style: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    interest_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13),
        paddingHorizontal: moderateScale(10)
    },
    inputContainerStyle: {
        paddingLeft: moderateScale(5)
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(12),
        width: '80%'
    },
    app_btn_style: {
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(34),
        borderRadius: moderateScale(37),
        flexDirection: 'row',
        paddingHorizontal: moderateScale(10),
        marginHorizontal:0
    },
    app_btn_txt_style: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10)
    },
    modal_view: {
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(15),
        borderRadius: moderateScale(20)
    },
    heading_txt:  {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(15)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        marginVertical: moderateScale(10)
    }

});

//make this component available to the app
export default Profile;
