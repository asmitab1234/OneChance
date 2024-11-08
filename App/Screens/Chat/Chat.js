//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { AppBar, Text, AppTextInput, Container, useTheme, Card, Icon } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import ChatOnlineUserList from '../../Components/Chat/ChatOnlineUserList';
import PartnerList from '../../Components/Chat/PartnerList';

// create a component
const Chat = () => {
    const colors = useTheme()
    const online_user_data = [
        {
            img: require('../../Assets/images/user.png'),
            name: 'JASON'
        },
        {
            img: require('../../Assets/images/user1.png'),
            name: 'FOYE'
        },
        {
            img: require('../../Assets/images/user2.png'),
            name: 'LIO'
        },
        {
            img: require('../../Assets/images/user3.png'),
            name: 'NOOR'
        },
        {
            img: require('../../Assets/images/user1.png'),
            name: 'HIME'
        },
        {
            img: require('../../Assets/images/request.png'),
            name: 'JASON'
        },
        {
            img: require('../../Assets/images/user.png'),
            name: 'Nancy'
        },


    ]

    const partnerData = [
        {
            img: require('../../Assets/images/user.png'),
            type: 'notdelivered',
            new_msg: true,
        },
        {
            img: require('../../Assets/images/user1.png'),
            type: 'notdelivered',
            new_msg: false,
        },
        {
            img: require('../../Assets/images/user2.png'),
            type: 'delivered',
            new_msg: false,
        },
        {
            img: require('../../Assets/images/user3.png'),
            type: 'delivered',
            new_msg: false,
        },
        {
            img: require('../../Assets/images/user.png'),
            type: 'delivered',
            new_msg: true,
        },
        {
            img: require('../../Assets/images/user1.png'),
            type: 'notdelivered',
            new_msg: true,
        },

    ]
    return (
        <Container>
            <AppBar
                title='Chat'
                titlePosition='left'
                style={styles.header_title_txt}
                titleStyle={styles.titleStyle}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Container>
                    <View
                        style={styles.main_view}
                    >
                        {/* search */}
                        <AppTextInput
                            placeholder='Search your Partner.....'
                            inputContainerStyle={{
                                ...styles.inputContainerStyle,
                                backgroundColor: 'rgba(45, 45, 45, 0.05)'
                            }}
                            style={styles.app_txt_style}
                            leftIcon={{
                                name: 'search1',
                                type: 'AntDesign',
                                color: colors.borderColor
                            }}
                        />

                        {/* Active user list */}
                        <Text style={styles.active_txt}>Now Active</Text>
                        <FlatList
                            horizontal={true}
                            data={online_user_data}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <View
                                        key={index}
                                    >
                                        <ChatOnlineUserList
                                            item={item}
                                        />
                                    </View>
                                )
                            }}
                        />
                        {/* Love partner */}
                        <Text style={{
                            ...styles.love_partner_txt,
                            color: colors.primaryThemeColor
                        }}>Love Partner</Text>


                        <Card
                            style={{
                                backgroundColor: colors.secondaryThemeColor,
                                elevation: 6,
                                marginBottom: moderateScale(10)
                            }}
                        >
                            <FlatList
                                data={partnerData}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View
                                            key={index}
                                        >
                                            <PartnerList
                                                item={item}
                                            />
                                        </View>
                                    )
                                }}
                            />
                        </Card>


                    </View>
                </Container>
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    header_title_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    },
    titleStyle: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    },
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    inputContainerStyle: {
        height: moderateScale(60),
        alignSelf: 'center',
        borderWidth: 0,
        borderRadius: moderateScale(30),
        paddingHorizontal: moderateScale(10)
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(11),
        width: '90%'
    },
    active_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        marginTop: moderateScale(10)
    },
    love_partner_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(16),
        marginVertical: moderateScale(12)
    },


});

//make this component available to the app
export default Chat;
