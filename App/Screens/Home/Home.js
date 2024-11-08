//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Pressable } from 'react-native';
import { Card, Text, Container, useTheme, AppButton } from 'react-native-basic-elements';
import HomeHeader from '../../Components/Header/HomeHeader';
import MapView, { Marker } from 'react-native-maps';
import { Image } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import Modal from "react-native-modal";
import { FONTS } from '../../Constants/Fonts';
import { FlatList } from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const Home = () => {
    const colors = useTheme()
    const [isModalVisible, setModalVisible] = useState(false);
    const [select, setSelect] = useState('')
    const [isModalForChaeckinVisible, setModalForChaeckinVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const toggleForChaeckinModal = () => {
        setModalForChaeckinVisible(!isModalForChaeckinVisible);
    };
    const restroData = [
        {
            restor_name: 'Cafe Coffee Day',
            img: require('../../Assets/images/ccd.png'),
        },
        {
            restor_name: 'Starbucks Coffee',
            img: require('../../Assets/images/starbucks.png'),
        },
        {
            restor_name: 'KFC',
            img: require('../../Assets/images/kfc.png'),
        }
    ]
    return (
        <Container>
            <HomeHeader />
            <View style={styles.map}>

                <MapView
                    scrollEnabled={false}
                    style={{
                        flex: 1
                    }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,

                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,

                        }} >
                    </Marker>
                </MapView>
            </View>
            {/* connections image */}
            <Pressable
                onPress={() => NavigationService.navigate('ViewProfile')}
                style={styles.connections_view}
            >
                <Image
                    source={require('../../Assets/images/homeuser.png')}
                    resizeMode='contain'
                    style={{
                        height: moderateScale(30),
                        width: moderateScale(30)
                    }}
                />
            </Pressable>
            {/* user iamge */}
            <Pressable
                onPress={toggleModal}
                style={{
                    position: 'absolute',
                    zIndex: 9999,
                    top: height / 2.5,
                    alignSelf: 'center'
                }}
            >
                {/* <ImageBackground
                    source={require('../../Assets/images/loading.gif')}
                    resizeMode='contain'
                    style={{
                        height: moderateScale(200),
                        width: moderateScale(200),
                        borderWidth:1
                    }}
                > */}

                <Pressable
                    onPress={toggleModal}
                    style={{
                        ...styles.image_view,
                        backgroundColor: 'rgba(255, 158, 189, 0.3)'
                    }}
                >
                    <Image
                        source={require('../../Assets/images/user.png')}
                        resizeMode='contain'
                        style={{
                            height: moderateScale(100),
                            width: moderateScale(100)
                        }}
                    />
                </Pressable>
                {/* </ImageBackground> */}
            </Pressable>
            {/* restro list modal */}
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onBackButtonPress={() => setModalVisible(false)}
                backdropOpacity={0}
                style={{
                    marginHorizontal: 0,
                    justifyContent: 'flex-end',
                    marginBottom: 0
                }}
            >
                <View
                    style={{
                        ...styles.bottom_modal_restro_list,
                        backgroundColor: colors.secondaryThemeColor
                    }}
                >
                    <FlatList
                        data={restroData}
                        renderItem={({ item, index }) => {
                            return (
                                <Card
                                    shadow={false}
                                    style={{
                                        ...styles.box_view,
                                        borderWidth: index == select ? 0 : 1,
                                        backgroundColor: index == select ? colors.cardColor : colors.secondaryThemeColor,
                                        borderColor: index == select ? 'transparent' : colors.borderColor
                                    }}
                                    onPress={() => {
                                        setModalVisible(false)
                                        toggleForChaeckinModal()
                                        setSelect(index)
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
                                        <Text style={styles.name}>{item.restor_name}</Text>
                                        <Text style={{
                                            ...styles.sub_txt,
                                            color: colors.secondaryFontColor
                                        }}>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit</Text>
                                    </View>
                                </Card>
                            )
                        }}
                    />


                </View>
            </Modal>

            {/* Checkin */}
            <Modal
                isVisible={isModalForChaeckinVisible}
                onBackdropPress={() => setModalForChaeckinVisible(false)}
                onBackButtonPress={() => setModalForChaeckinVisible(false)}
                backdropOpacity={0}
                style={{
                    marginHorizontal: 0,
                    justifyContent: 'flex-end',
                    marginBottom: 0
                }}
            >
                <View
                    style={{
                        ...styles.checkin_modal,
                        backgroundColor: colors.secondaryThemeColor
                    }}
                >
                    <Image
                        source={require('../../Assets/images/ccd.png')}
                        style={{
                            height: moderateScale(75),
                            width: moderateScale(52),
                            alignSelf: 'center'
                        }}
                    />

                    <Text style={styles.cafe_name_txt}>Cafe Coffee Day</Text>
                    <Text
                        style={{
                            ...styles.cafe_details,
                            color: colors.secondaryFontColor
                        }}
                    >Lorem ipsum dolor sit amet consectetur. Porttitor morbi urna ut quam convallis pellentesque. Commodo aliquet eget suspendisse consequat vitae pellentesque.</Text>

                    <AppButton
                        title='Check in'
                        style={styles.app_btn_style}
                        textStyle={{...styles.app_btn_txt_style,
                        color: colors.secondaryThemeColor
                        }}
                        buttonIcon={{
                            name: 'location-sharp',
                            type: 'Ionicon',
                            position: 'right',
                            color: colors.secondaryThemeColor,
                            size: 18
                        }}
                        onPress={() => setModalForChaeckinVisible(false)} 
                    />
                </View>
            </Modal>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    map: {
        alignSelf: "center",
        width: "100%",
        flex: 1,
        overflow: "hidden",
    },
    image_view: {
        height: moderateScale(110),
        width: moderateScale(110),
        borderRadius: moderateScale(55),
        justifyContent: 'center',
        alignItems: 'center'
    },
    connections_view: {
        position: 'absolute',
        zIndex: 9999,
        right: moderateScale(20),
        top: moderateScale(150)
    },
    bottom_modal_restro_list: {
        // height: height / 3,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        paddingHorizontal: moderateScale(15),
        paddingTop: moderateScale(15)
    },
    box_view: {
        flexDirection: 'row',
        // elevation: 2,
        marginBottom: moderateScale(10),
        alignItems: 'center'
    },
    img_style: {
        height: moderateScale(49),
        width: moderateScale(34)
    },
    name: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        lineHeight: moderateScale(14.75)
    },
    sub_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10),
        maxWidth: '90%'
    },
    checkin_modal: {
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        paddingHorizontal: moderateScale(15),
        paddingTop: moderateScale(15)
    },
    cafe_name_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(15),
        textAlign: 'center',
        marginVertical: moderateScale(10)
    },
    cafe_details: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10),
        textAlign: 'center'
    },
    app_btn_style:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        height: moderateScale(58),
        borderRadius: moderateScale(29),
        marginVertical: moderateScale(15),
        flexDirection: 'row'
    },
    app_btn_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14)

    }
});

//make this component available to the app
export default Home;
