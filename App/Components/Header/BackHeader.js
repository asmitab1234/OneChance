//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { AppBar, Icon, Text, StatusBar, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';

// create a component
const BackHeader = ({ title, type, toggleModal }) => {
    const colors = useTheme()
    return (
        <View>
            <AppBar.Back
                title={title ? title : null}
                titlePosition={type == 'profile' ? 'middle' : 'left'}
                titleStyle={styles.title_style}
                onLeftIconPress={() => NavigationService.back()}
                rightActions={type == 'interest' ? [
                    {
                        icon: <Text style={{
                            ...styles.skip_txt,
                            color: colors.secondaryFontColor
                        }}>Skip</Text>
                    }

                ]
                    : type == 'profile' ?
                        [
                            {
                                icon:
                                    <Pressable
                                        onPress={() => NavigationService.navigate('Settings')}
                                    >
                                        <Icon
                                            name='settings'
                                            type='Feather'
                                            style={{
                                                marginRight: moderateScale(15)
                                            }}
                                            color={colors.secondaryFontColor}
                                        />
                                    </Pressable>

                            },
                            {
                                icon:
                                    <Pressable
                                        onPress={toggleModal}
                                    >
                                        <Icon
                                            name='shield-checkmark-sharp'
                                            type='Ionicon'
                                            color={colors.secondaryFontColor}
                                        />
                                    </Pressable>

                            }
                        ]
                        : []}
            />
            <StatusBar
                backgroundColor={colors.secondaryThemeColor}
                barStyle='dark-content'
            />
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    title_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    },
    skip_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12)
    }
});

//make this component available to the app
export default BackHeader;
