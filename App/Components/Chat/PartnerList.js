//import liraries
import React, { Component } from 'react';
import { View,  StyleSheet, Image, Pressable } from 'react-native';
import { Icon, Text, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';

// create a component
const PartnerList = ({item}) => {
    const colors = useTheme()
    return (
        <Pressable
        onPress={() =>  NavigationService.navigate('IcebreakerBotChat')}
            style={styles.horizontal_view_for_partner_list}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={item.img}
                    style={styles.partner_img_style}
                />

                <View
                    style={{
                        marginLeft: moderateScale(10)
                    }}
                >
                    <Text style={styles.name_txt}>Natsha Winkles</Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            ...styles.msg_txt,
                            color: colors.borderColor,
                            maxWidth: '90%'
                        }}>Hello, evening too Andrew</Text>
                </View>
            </View>

            <View
                style={{
                    alignItems: 'flex-end',
                    flexDirection: 'row'
                }}
            >
                {item.type == 'notdelivered' ?
                    <Icon
                        name='checkmark-done'
                        type='Ionicon'
                        color={colors.borderColor}
                        style={{
                            marginRight: moderateScale(5)
                        }}
                    />
                    :
                    <Icon
                        name='checkmark-done'
                        type='Ionicon'
                        color={'#007AEA'}
                        style={{
                            marginRight: moderateScale(5)
                        }}
                    />
                }

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: moderateScale(5)
                    }}
                >
                    {item.new_msg ?
                        <View
                            style={{
                                ...styles.new_msg_circle,
                                backgroundColor: colors.primaryThemeColor
                            }}
                        >
                            <Text style={{
                                ...styles.msg_count,
                                color: colors.secondaryThemeColor
                            }}>1</Text>
                        </View>
                        :
                        null
                    }

                    <Text style={{...styles.time_txt,
                    color: colors.borderColor
                    }}>16.00</Text>
                </View>
            </View>

        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    horizontal_view_for_partner_list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(10)
    },
    partner_img_style: {
        height: moderateScale(54),
        width: moderateScale(54),
    },
    name_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    msg_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12)
    },
    new_msg_circle: {
        height: moderateScale(16),
        width: moderateScale(16),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(8)
    },
    msg_count: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(9)
    },
    time_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(11),
        marginTop: moderateScale(5),
    }

});

//make this component available to the app
export default PartnerList;
