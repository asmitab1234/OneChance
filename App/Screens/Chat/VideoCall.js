//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { Image } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';

const { height, width } = Dimensions.get('window')
// create a component
const VideoCall = () => {
    const colors = useTheme()
    return (
        <Container>
            <StatusBar
                backgroundColor={'transparent'}
                translucent={true}
                barStyle='light-content'
            />
            <View
            style={{
                flex:1
            }}
            >

                <View
                style={styles.back_btn_view}
                >
                    <Icon 
                    name='arrowleft'
                    type='AntDesign'
                    color={colors.secondaryThemeColor}
                    />
                </View>
                <Image
                    source={require('../../Assets/images/videocallbg.png')}
                    resizeMode='cover'
                    style={{
                        height: height,
                        width: width
                    }}
                />

                <View
                    style={styles.user_img_view}
                >
                    <View
                    style={styles.expand_style}
                    >
                        <Icon 
                        name='expand'
                        type='FontAwesome'
                        color={colors.secondaryThemeColor}
                        />
                    </View>
                    <Image
                        source={require('../../Assets/images/videocall.png')}
                        style={{
                            height: moderateScale(206),
                            width: moderateScale(158)
                        }}
                    />
                </View>

                <View
                    style={styles.call_options_view}
                >
                    <Image
                        source={require('../../Assets/images/camerachanges.png')}
                        resizeMode='contain'
                        style={{
                            height: moderateScale(55),
                            width: moderateScale(56),
                        }}
                    />
                    <Image
                        source={require('../../Assets/images/endCall.png')}
                        resizeMode='contain'
                        style={{
                            height: moderateScale(66),
                            width: moderateScale(68),
                        }}
                    />
                    <Image
                        source={require('../../Assets/images/mute.png')}
                        resizeMode='contain'
                        style={{
                            height: moderateScale(55),
                            width: moderateScale(56),
                        }}
                    />
                </View>
            </View>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    user_img_view: {
        position: 'absolute',
        zIndex: 9999,
        top: moderateScale(35),
        right: moderateScale(15),
    },
    call_options_view: {
        position: 'absolute',
        zIndex: 9999,
        bottom: moderateScale(20),
        marginHorizontal: moderateScale(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width-moderateScale(60)
    },
    back_btn_view: {
        position: 'absolute',
        top: moderateScale(40),
        zIndex: 9999,
        left: moderateScale(15)
    },
    expand_style: {
        position: 'absolute',
        zIndex: 9999,
        bottom: 20,
        left: 20
    }
});

//make this component available to the app
export default VideoCall;
