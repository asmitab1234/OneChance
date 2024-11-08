//import liraries
import React, { Component } from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { AppBar, Text, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

// create a component
const HomeHeader = () => {
    const colors = useTheme()
    return (
        <View>
            <StatusBar
                backgroundColor={colors.pageBackgroundColor}
                barStyle='dark-content'
            />
            <AppBar
                leftImage={require('../../Assets/images/user.png')}
                leftImageStyle={styles.img_style}
                title='Good Morning'
                titleStyle={styles.titleStyle}
                subTitle='Jason Carsel'
                subTitleStyle={{
                    ...styles.subTitleStyle,
                    color: colors.primaryFontColor
                }}
                titlePosition='left'
                rightActions={[
                    {
                        icon:
                            <Pressable
                            onPress={()=>NavigationService.navigate('Notification')}
                            >
                                <Icon
                                    name='notifications-outline'
                                    type='Ionicon'
                                    style={{
                                        marginRight: 10
                                    }}
                                />
                            </Pressable>
                    },
                ]}
                style={{
                    elevation: 4,
                    borderBottomRightRadius: moderateScale(15),
                    borderBottomLeftRadius: moderateScale(15)
                }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: FONTS.light,
        fontSize: moderateScale(13)
    },
    subTitleStyle: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    img_style: {
        height: moderateScale(46),
        width: moderateScale(46),
        borderRadius: moderateScale(23)
    }
});

//make this component available to the app
export default HomeHeader;
