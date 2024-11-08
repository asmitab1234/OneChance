//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme ,  Text,} from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { Image } from 'react-native';
import { FONTS } from '../../Constants/Fonts';

// create a component
const ChatOnlineUserList = ({item}) => {
    const colors = useTheme()
    return (
        <View
            style={styles.horizontal_view}
        >
            <View
                style={{
                    marginRight: moderateScale(15),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View>
                    <Image
                        source={item.img}
                        resizeMode='contain'
                        style={styles.online_user_image_style}
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

                <Text style={styles.name_txt}>{item.name}</Text>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    online_user_image_style: {
        height: moderateScale(54),
        width: moderateScale(54),
        marginTop: moderateScale(10)
    },
    outercircle: {
        height: moderateScale(12),
        width: moderateScale(12),
        borderRadius: moderateScale(6),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: moderateScale(5),
        right: moderateScale(-2)
    },
    online_circle: {
        height: moderateScale(9),
        width: moderateScale(9),
        borderRadius: moderateScale(5)
    },
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10),
        marginTop: moderateScale(10),
        maxWidth:  moderateScale(54)
    }
});

//make this component available to the app
export default ChatOnlineUserList;
