//import liraries
import React, { Component } from 'react';
import { View,  StyleSheet } from 'react-native';
import { Card, Text, Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';

// create a component
const ArticleCard = () => {
    const colors = useTheme()
    return (
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
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Icon
                        name='like'
                        type='EvilIcon'
                        size={30}
                    />
                    <Text style={styles.people_txt}>300 People's</Text>
                </View>

                <Icon
                    name='dots-three-vertical'
                    type='Entypo'
                    size={15}
                    color={colors.secondaryFontColor}
                />
            </View>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
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
        padding: moderateScale(10),
        justifyContent: 'space-between'
    },
    people_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13),
        marginLeft: moderateScale(10)
    },
});

//make this component available to the app
export default ArticleCard;
