//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { AppButton, Container, Icon, Text, useTheme, } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import ImagePicker from 'react-native-image-crop-picker';
import NavigationService from '../../Services/Navigation';

// create a component
const UploadPhotos = () => {
    const colors = useTheme()
    const [ImageUrl, setImageUrl] = useState(null)
    const uploadImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImageUrl(image.path)
            console.log('image', ImageUrl);
        });
    }
    return (
        <Container>
            <BackHeader title='Upload  Your  Photos' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.main_view}
                >
                    <Text style={{
                        ...styles.heading_txt,
                        color: colors.secondaryFontColor
                    }}>Lorem ipsum dolor sit amet consectetur. Eget nunc bibendum arcu nec.</Text>

                    <View
                        style={styles.horizontal_view}
                    >
                        {[1, 2, 3, 4].map((item, index) => {
                            return (
                                <>
                                    {ImageUrl ?
                                        <Image
                                            source={{ uri: ImageUrl }}
                                            resizeMode='contain'
                                            style={{
                                                height: moderateScale(189),
                                                width: moderateScale(150),
                                                marginTop: moderateScale(10),
                                                borderRadius: moderateScale(20)
                                            }}
                                        />
                                        :
                                        <Pressable
                                            key={index}
                                            onPress={uploadImage}
                                            style={{
                                                ...styles.box_view,
                                                borderStyle: 'dashed',
                                                borderColor: colors.primaryThemeColor,
                                                backgroundColor: 'rgba(255, 33, 104, 0.1)'
                                            }}
                                        >
                                            <Icon
                                                name='add-circle'
                                                type='Ionicon'
                                                size={40}
                                                color={colors.primaryThemeColor}
                                            />
                                        </Pressable>
                                    }

                                </>
                            )
                        })}
                    </View>

                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <View
                        style={{
                            ...styles.fb_btn_view,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)'
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/facebook.png')}
                            resizeMode='contain'
                            style={{
                                height: moderateScale(32),
                                width: moderateScale(30)
                            }}
                        />

                        <Text style={{
                            ...styles.add_img_txt,
                            color: 'rgba(45, 45, 45, 0.5)'
                        }}>Add Images from Facebook</Text>


                    </View>
                    <AppButton
                        title='Countinue'
                        style={styles.app_btn_style}
                        textStyle={{...styles.app_btn_txt_style,
                        color: colors.secondaryThemeColor
                        }}
                        onPress={() => NavigationService.navigate('SexualOrientation')}
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
    heading_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12)
    },
    horizontal_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    box_view: {
        height: moderateScale(189),
        width: moderateScale(150),
        borderWidth: 1,
        borderRadius: moderateScale(20),
        marginTop: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    app_btn_style: {
        height: moderateScale(55),
        borderRadius: moderateScale(30),
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateScale(20)
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)
    },
    fb_btn_view: {
        height: moderateScale(55),
        width: '100%',
        borderRadius: moderateScale(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateScale(20),
        flexDirection: 'row',
    },
    add_img_txt: {
        marginLeft: moderateScale(10),
        fontFamily: FONTS.regular,
        fontSize: moderateScale(14)
    }
});

//make this component available to the app
export default UploadPhotos;
