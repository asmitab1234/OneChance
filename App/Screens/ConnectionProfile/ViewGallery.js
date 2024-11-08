//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList, Pressable } from 'react-native';
import { Container, Text, Icon, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import ImageList from '../../Components/Profile/ImageList';

// create a component
const ViewGallery = (props) => {
    const name = props.route.params.type
    const colors = useTheme()
    const imgData = [
        {
            img: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            img: 'https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            img: 'https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            img: 'https://images.pexels.com/photos/4055351/pexels-photo-4055351.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            img: 'https://images.pexels.com/photos/1382730/pexels-photo-1382730.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
    ]
    return (
        <Container>
            <BackHeader title='Gallery' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <FlatList
                    data={imgData}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                key={index}
                            >
                                <ImageList
                                    item={item}
                                    name={name}
                                />
                            </View>
                        )
                    }}
                />

            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default ViewGallery;
