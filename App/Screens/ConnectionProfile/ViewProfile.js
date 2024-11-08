//import liraries
import React, { Component, useRef, useState } from 'react';
import { Dimensions, Image, Pressable, ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { AppButton, Text, Container, Icon, StatusBar, useTheme, Card } from 'react-native-basic-elements';
import ViewProfileSwipper from '../../Components/Connection/ViewProfileSwipper';
import { FONTS } from '../../Constants/Fonts';

import { moderateScale } from '../../Constants/PixelRatio';
import Gallery from '../../Components/Connection/Gallery';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const ViewProfile = (props) => {
    const type = props?.route?.params?.type
    console.log('type', type);
    const colors = useTheme()
    const [accept, setAccept] = useState('pending')
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
            <StatusBar
                backgroundColor={'transparent'}
                translucent={true}
                barStyle='dark-content'
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* swiper */}
                <ViewProfileSwipper />
                {/* Accept and reject button */}
                {type == 'connection request' ?
                    null
                    :
                    <View
                        style={styles.horizontal_view}
                    >
                        <AppButton
                            title='Reject'
                            style={{
                                ...styles.app_btn_style,
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: colors.borderColor
                            }}
                            textStyle={{
                                ...styles.app_btn_txt_style,
                                color: colors.borderColor
                            }}
                            buttonIcon={{
                                name: 'cross',
                                type: 'Entypo',
                                position: 'left',
                                color: colors.borderColor
                            }}
                        />
                        <AppButton
                            title='Connect'
                            style={styles.app_btn_style}
                            textStyle={{
                                ...styles.app_btn_txt_style,
                                color: colors.secondaryThemeColor
                            }}
                            buttonIcon={{
                                name: 'heart',
                                type: 'AntDesign',
                                position: 'left',
                                color: colors.secondaryThemeColor
                            }}
                        />
                    </View>
                }

                {/* connection name */}
                <View
                    style={styles.main_view}
                >
                    <Text style={styles.connection_name}>Mithi Jain, 30</Text>
                    <View
                        style={styles.horizontal_view_for_designation}
                    >
                        <Text style={styles.position_txt}>Designer,</Text>

                        <View
                            style={styles.horizontal_view_for_designation}
                        >
                            <Icon
                                name='location-outline'
                                type='Ionicon'
                                color={colors.primaryThemeColor}
                                size={15}
                                style={{
                                    marginRight: moderateScale(5)
                                }}
                            />
                            <Text style={{
                                ...styles.position_txt,
                                color: colors.primaryThemeColor,
                                lineHeight: 14.75
                            }}>1 Km</Text>
                        </View>
                    </View>
                    {/* About */}
                    <Text style={styles.about_txt}>About me</Text>
                    <Text style={{
                        ...styles.sub_txt,
                        color: colors.secondaryFontColor
                    }}>In publishing and graphic design, Loremipsum is a placeholder text   ommonly used to demonstrate the visual form of a document or a typeface </Text>
                    {/* interest */}
                    <Text style={styles.about_txt}>Interest</Text>
                    <View
                        style={styles.horizontal_view_for_interest}
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
                    <Text style={styles.about_txt}>Sexual Orientation</Text>
                    <AppButton
                        title='Straight'
                        style={styles.app_btn_orientation_style}
                        textStyle={{
                            ...styles.app_btn_orientation_txt_style,
                            color: colors.secondaryThemeColor
                        }}
                    />

                    <Text style={styles.about_txt}>Ideal Match</Text>

                    <View
                        style={{
                            ...styles.circle_view,
                            backgroundColor: 'rgba(255, 33, 104, 0.2)'
                        }}
                    >
                        <Icon
                            name='heart'
                            type='AntDesign'
                            color={colors.primaryThemeColor}
                        />
                    </View>
                    <Text style={{
                        ...styles.relationship_txt,
                        color: colors.primaryThemeColor
                    }}>Relationship</Text>

                    {/* Gallery */}
                    <Text style={styles.about_txt}>Gallery</Text>
                    <Gallery />

                    {/* Articles */}
                    <Text style={styles.about_txt}>Articles</Text>
                    <Card
                        style={{
                            ...styles.card,
                            backgroundColor: colors.secondaryThemeColor
                        }}
                    >
                        <Text
                            style={styles.card_txt}
                        >Lorem ipsum dolor sit amet consectetur. Odio velit consectetur ipsum amet augue et. Duis est feugiat quis lacus consequat in lectus.</Text>
                        <View
                            style={{
                                ...styles.borderLine,
                                backgroundColor: 'rgba(0, 0, 0, 0.14)'
                            }}
                        />
                        <View
                            style={styles.card_like_view}
                        >
                            <Icon
                                name='like'
                                type='EvilIcon'
                                size={30}
                            />
                            <Text style={styles.people_txt}>300 People</Text>
                        </View>
                    </Card>
                </View>
            </ScrollView>
            {type == 'connection request' ?
                accept == 'pending' ?
                    <View
                        style={styles.horizontal_view_for_btns}
                    >
                        <AppButton
                            title='Reject'
                            style={{
                                ...styles.app_btn_acc_rej_btn,
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: colors.borderColor
                            }}
                            textStyle={{
                                ...styles.app_btn_acc_rej_txt_style,
                                color: colors.borderColor
                            }}
                        />

                        <AppButton
                            title='Accept'
                            style={{
                                ...styles.app_btn_acc_rej_btn,
                            }}
                            textStyle={{
                                ...styles.app_btn_acc_rej_txt_style,
                                color: colors.secondaryThemeColor
                            }}
                            onPress={() => setAccept('accepted')}
                        />
                    </View>
                    :
                    <AppButton
                        title='Say Hello to Mithi'
                        style={styles.app_btn_for_hello}
                        textStyle={{...styles.app_btn_for_hello_txt,
                        color: colors.secondaryThemeColor
                        }}
                        onPress={() => NavigationService.navigate('IcebreakerBotChat')}
                    />

                :
                null
            }
        </Container >
    );
};

// define your styles
const styles = StyleSheet.create({
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScale(20),
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(10)
    },
    app_btn_style: {
        height: moderateScale(58),
        width: moderateScale(160),
        borderRadius: moderateScale(29),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: 0,
        flexDirection: 'row'
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    connection_name: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(18)
    },
    horizontal_view_for_designation: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    position_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(11)
    },
    about_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        marginTop: moderateScale(10)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(11)
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
    horizontal_view_for_interest: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    app_btn_orientation_style: {
        marginHorizontal: moderateScale(0),
        justifyContent: 'center',
        alignItems: 'center',
        width: moderateScale(140),
        borderRadius: moderateScale(32),
        marginVertical: moderateScale(10),
        height: moderateScale(45)
    },
    app_btn_orientation_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(13)
    },
    circle_view: {
        height: moderateScale(48),
        width: moderateScale(48),
        borderRadius: moderateScale(24),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(10),
        margin: moderateScale(20)
    },
    relationship_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    card_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        padding: moderateScale(10)
    },
    card: {
        padding: 0,
        marginVertical: moderateScale(10)
    },
    borderLine: {
        height: moderateScale(1),
        marginVertical: moderateScale(5)
    },
    card_like_view: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(10)
    },
    people_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        marginLeft: moderateScale(10)
    },
    horizontal_view_for_btns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        paddingVertical: moderateScale(10)
    },
    app_btn_acc_rej_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(58),
        width: moderateScale(150),
        borderRadius: moderateScale(30),
        marginHorizontal: 0
    },
    app_btn_acc_rej_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    app_btn_for_hello: {
        marginHorizontal: moderateScale(15),
        height: moderateScale(58),
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateScale(10)
    },
    app_btn_for_hello_txt:{
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    }

});

//make this component available to the app
export default ViewProfile;
