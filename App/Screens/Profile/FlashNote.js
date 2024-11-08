//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { AppButton, Card, Container, Icon, Text, useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import FlashNoteConnectionCard from '../../Components/Profile/FlashNoteConnectionCard';
import NavigationService from '../../Services/Navigation';
import HeaderImage from './FlashNotes/HeaderImage';

// create a component
const FlashNote = () => {
    const colors = useTheme()
    const userData = [
        {
            img: require('../../Assets/images/user.png')
        },
        {
            img: require('../../Assets/images/user1.png')
        },
        {
            img: require('../../Assets/images/user2.png')
        },
        {
            img: require('../../Assets/images/user.png')
        }
    ]
    return (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        height: moderateScale(30)
                    }}
                />
                <View
                    style={styles.main_view}
                >
                  <HeaderImage />
                    <Card
                        style={{
                            ...styles.card,
                            backgroundColor: colors.secondaryThemeColor
                        }}
                    >
                        {userData.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                >
                                    <FlashNoteConnectionCard item={item} />
                                </View>
                            )
                        })}

                    </Card>

                    <AppButton
                        title='Upgrade One Chance Premium'
                        style={{
                            ...styles.app_btn_premium,
                            backgroundColor: 'transparent',
                            borderColor: colors.secondaryFontColor
                        }}
                        textStyle={{
                            ...styles.app_btn_prrmium_txt,
                            color: colors.secondaryFontColor
                        }}
                    />
                    <AppButton
                        title='Continue'
                        style={styles.app_btn_style}
                        textStyle={{
                            ...styles.app_btn_txt_style,
                            color: colors.secondaryThemeColor
                        }}
                        onPress={() => NavigationService.navigate('UploadPhotos')}
                    />
                </View>
            </ScrollView>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    
    card: {
        marginVertical: moderateScale(30),
        elevation: 3
    },
    app_btn_premium: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: moderateScale(30),
        height: moderateScale(52)
    },
    app_btn_prrmium_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    app_btn_style: {
        // marginHorizontal: 0,
        marginVertical: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(55),
        borderRadius: moderateScale(30)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    }

});

//make this component available to the app
export default FlashNote;
