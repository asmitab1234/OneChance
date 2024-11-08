//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Text, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { Image } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

const { height, width } = Dimensions.get('window')
// create a component
const AudioCall = () => {
    const colors = useTheme()
    return (
        <Container>
            <BackHeader />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../../Assets/images/audiocalluser.png')}
                        resizeMode='contain'
                        style={{
                            height: moderateScale(162),
                            width: moderateScale(162)
                        }}
                    />

                    <Text style={styles.name_txt}>Noor Jain</Text>
                    <Text style={{
                        ...styles.time_txt,
                        color: colors.secondaryFontColor
                    }}>03:35 minutes</Text>
                </View>
            </View>
            <View
                style={styles.horizontal_view}
            >
                <Image
                    source={require('../../Assets/images/speaker.png')}
                    style={{
                        height: moderateScale(55),
                        width: moderateScale(56)
                    }}
                />
                <Image
                    source={require('../../Assets/images/endCall.png')}
                    style={{
                        height: moderateScale(66),
                        width: moderateScale(68)
                    }}
                />
                <Image
                    source={require('../../Assets/images/mute.png')}
                    style={{
                        height: moderateScale(55),
                        width: moderateScale(56)
                    }}
                />
            </View>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    name_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(18),
        marginTop: moderateScale(10)
    },
    time_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10)
    },
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: moderateScale(20),
        marginHorizontal: moderateScale(30)
    }
});

//make this component available to the app
export default AudioCall;
