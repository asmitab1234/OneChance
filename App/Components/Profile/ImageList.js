//import liraries
import React, { Component, useState } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, Pressable } from 'react-native';
import { Icon, Text, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

// create a component
const ImageList = ({ item, name }) => {
    const colors = useTheme()
    const [show, setShow] = useState(false)

    return (
        <View
            // key={index}
            style={styles.main_view}
        >
            {name == 'userProfile' ?
                <Pressable
                    onPress={() => setShow(!show)}
                    style={styles.three_dot_vertical_view}
                >
                    <Icon
                        name='dots-three-vertical'
                        type='Entypo'
                        color={colors.secondaryThemeColor}
                    />
                </Pressable>
                : null
            }

            {show ?
                <View
                    style={{
                        ...styles.remove_img_view,
                        backgroundColor: colors.secondaryThemeColor
                    }}
                >
                    <Text style={styles.remove_img_txt}>Remove Image</Text>
                </View>
                :
                null
            }

            <Image
                source={{ uri: item.img }}
                resizeMode='cover'
                style={styles.img_style}
            />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 10,
                    left: moderateScale(10)
                }}
            >
                <Icon
                    name='like2'
                    type='AntDesign'
                    color={colors.secondaryThemeColor}
                />
                <Text style={{
                    ...styles.like_txt,
                    color: colors.secondaryThemeColor
                }}>1.2k People's</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: moderateScale(15),
        marginBottom: moderateScale(10)
    },
    img_style: {
        height: moderateScale(450),
        borderRadius: moderateScale(10)
        // borderWidth:1
    },
    like_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(10)
    },
    three_dot_vertical_view: {
        position: 'absolute',
        zIndex: 9999,
        top: moderateScale(10),
        right: moderateScale(10),
    },
    remove_img_view: {
        position: 'absolute',
        zIndex: 9999,
        top: moderateScale(20),
        right: moderateScale(25),
        height: moderateScale(45),
        width: moderateScale(174),
        borderRadius: moderateScale(5),
        justifyContent: 'center',
        // alignItems: 'center'
    },
    remove_img_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(10)
    }
});

//make this component available to the app
export default ImageList;
