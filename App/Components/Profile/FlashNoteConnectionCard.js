//import liraries
import React, { Component } from 'react';
import { View,  StyleSheet, Image } from 'react-native';
import { useTheme, Text, Icon, } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

// create a component
const FlashNoteConnectionCard = ({item}) => {
    const colors = useTheme()
    return (
        <View
            style={styles.horizontal_view}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={item.img}
                    resizeMode='contain'
                    style={styles.img_style}
                />

                <View
                    style={{
                        marginLeft: moderateScale(10)
                    }}
                >
                    <Text
                        numberOfLines={1}
                        style={styles.name_txt}>Natsha Winkles, 35</Text>
                    <Text style={styles.profession_txt}>Dancer</Text>
                </View>
            </View>


            <Icon
                name='send'
                type='Feather'
                color={colors.primaryThemeColor}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScale(15)
    },
    img_style: {
        height: moderateScale(53),
        width: moderateScale(54)
    },
    name_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        // maxWidth: '80%',
    },
    profession_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(11)
    }
});

//make this component available to the app
export default FlashNoteConnectionCard;
