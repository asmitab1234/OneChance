//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import { Image } from 'react-native';
import { Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const Gallery = ({type}) => {
    const colors = useTheme()
    const calculateWidthGrid = (index, length) => {
        if (length == 1) {
            return '100%'
        }
        if (index < 2) {
            return '49%'
        } else {
            if (length == 3) {
                return '100%'
            }
            if (length <= 4) {
                return '49%'
            } else {
                return '32.5%'
            }
        }
    }
    const postMedia = [
        {
            img: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            img: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            img: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
    ]
    return (
        <Pressable
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: "space-between",
                // height: moderateScale(218),
                marginTop: moderateScale(5),
            }}
        >
            {
                postMedia?.length == 0 ?
                    null
                    :
                    postMedia.map((it, index) => {
                        if (index > 4) return;
                        return (
                            <View
                            key={index}
                                style={{
                                    height: postMedia?.length > 2 ? moderateScale(166) : moderateScale(218),
                                    width: calculateWidthGrid(index, postMedia?.length),
                                    margin: 1,
                                    borderRadius: 10,
                                    overflow: "hidden",
                                    marginTop: 3
                                }}
                            >
                                
                                
                                <Image
                                    source={{ uri: it.img }}
                                    style={[{ resizeMode: 'cover', flex: 1 }]}
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
                                    }}>1.2k</Text>
                                </View>


                                {
                                    index == 4 && postMedia?.length > 5 ?
                                        <TouchableOpacity
                                        onPress={()=>NavigationService.navigate('ViewGallery',{type: type})}

                                            style={{
                                                height: postMedia?.length > 2 ? moderateScale(166) : moderateScale(218),
                                                width: width / 3,
                                                backgroundColor: 'rgba(0,0,0,0.4)',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                position: "absolute"
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontFamily: FONTS.medium,
                                                    fontSize: 20
                                                }}
                                            >+{postMedia?.length - 5}</Text>
                                        </TouchableOpacity>
                                        :
                                        null
                                }

                            </View>
                        )
                    })

            }
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    like_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(10)
    },
   
});

//make this component available to the app
export default Gallery;
