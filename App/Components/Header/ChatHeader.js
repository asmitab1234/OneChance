//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, StatusBar as RNStatusBar, Pressable } from 'react-native';
import { AppBar, Text, Icon, StatusBar, useTheme, Card } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { Image } from 'react-native';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';

// create a component
const ChatHeader = ({ toggleModal }) => {
    const colors = useTheme()
    // const [show, setShow] = useState(false)
    return (
        <Pressable
            // onPress={() => setShow(false)}
            style={{
                ...styles.main_view,
                backgroundColor: colors.secondaryThemeColor
            }}
        >
            <StatusBar
                backgroundColor={colors.pageBackgroundColor}
                barStyle='dark-content'
                translucent={true}
            />
            <View
                style={styles.horizontal_view}
            >
                <View
                    style={styles.img_back_btn_view}
                >
                    <Pressable
                        onPress={() => NavigationService.back()}
                    >
                        <Icon
                            name='arrowleft'
                            type='AntDesign'
                        />
                    </Pressable>


                    <View>
                        <Image
                            source={require('../../Assets/images/user2.png')}
                            resizeMode='contain'
                            style={styles.imge_style}
                        />

                        <View
                            style={{
                                ...styles.outercircle,
                                backgroundColor: colors.secondaryThemeColor
                            }}
                        >
                            <View
                                style={{
                                    ...styles.online_circle,
                                    backgroundColor: '#23E736'
                                }}
                            >
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            marginLeft: moderateScale(5)
                        }}
                    >
                        <Text style={styles.title_txt}>Mithi Jain</Text>
                        <Text style={{
                            ...styles.sub_txt,
                            color: 'rgba(45, 45, 45, 0.5)'
                        }}>Active Now</Text>
                    </View>

                </View>

                <View
                    style={styles.horizontal_view_for_call}
                >
                    <Pressable
                        onPress={() => NavigationService.navigate('AudioCall')}
                    >
                        <Icon
                            name='call-outline'
                            type='Ionicon'
                            color={colors.secondaryFontColor}
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => NavigationService.navigate('VideoCall')}
                    >
                        <Icon
                            name='video'
                            type='Feather'
                            color={colors.secondaryFontColor}
                            style={{
                                marginHorizontal: moderateScale(15)
                            }}
                        />
                    </Pressable>

                    <Pressable
                        onPress={toggleModal}
                    >
                        <Icon
                            name='dots-three-vertical'
                            type='Entypo'
                            color={colors.secondaryFontColor}
                        />
                    </Pressable>
                    {/* {show ? 
                         <Card
                         style={{
                             position: 'absolute',
                             zIndex: 9999,
                             top: moderateScale(30),
                             right: moderateScale(10),
                             backgroundColor: colors.secondaryThemeColor
                         }}
                         >
                            <Text style={styles.menu_txt}>Delete Chat</Text>
                            <Text style={styles.menu_txt}>Block and Report</Text>
                         </Card>
                         : null
                    } */}


                </View>
            </View>
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        elevation: 4,
        borderBottomLeftRadius: moderateScale(10),
        borderBottomRightRadius: moderateScale(10),
        paddingTop: RNStatusBar.currentHeight,

    },
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        paddingVertical: moderateScale(20)
    },
    img_back_btn_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imge_style: {
        height: moderateScale(43),
        width: moderateScale(43),
        borderRadius: moderateScale(22),
        marginHorizontal: moderateScale(10)
    },
    outercircle: {
        height: moderateScale(12),
        width: moderateScale(12),
        borderRadius: moderateScale(6),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: moderateScale(3),
        right: moderateScale(7)
    },
    online_circle: {
        height: moderateScale(9),
        width: moderateScale(9),
        borderRadius: moderateScale(5)
    },
    title_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10)
    },
    horizontal_view_for_call: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menu_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        marginTop: moderateScale(10)
    }
});

//make this component available to the app
export default ChatHeader;
