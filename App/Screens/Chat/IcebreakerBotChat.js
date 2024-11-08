//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Pressable, Image, Dimensions, FlatList } from 'react-native';
import { AppTextInput, Card, Container, Icon, Text, useTheme, } from 'react-native-basic-elements';
import ChatHeader from '../../Components/Header/ChatHeader';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import ImagePicker from 'react-native-image-crop-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";
import ModalForThreeDot from '../../Components/Chat/ModalForThreeDot';


const { height, width } = Dimensions.get('window')
// create a component
const IcebreakerBotChat = () => {
    const colors = useTheme()
    const [show, setShow] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }
    const [chatData, setchatData] = useState([
        {
            msg_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            type: 'sender',
            msg_type: 'text'
        },
        {
            msg_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            type: 'sender',
            msg_type: 'text'
        },
        {
            msg_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            type: 'receiver',
            msg_type: 'text'
        },
        {
            msg_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
            type: 'receiver',
            msg_type: 'text'
        },

    ])
    const attachmentData = [
        {
            img: require('../../Assets/images/document.png')
        },
        {
            img: require('../../Assets/images/gallery.png')
        },
        {
            img: require('../../Assets/images/audio.png')
        },

    ]
    const  botData = [
        {
            msg: 'Hi!'
        },
        {
            msg: 'HOW ARE YOU?'
        },
        {
            msg: 'HOW ARE YOU?'
        }
    ]
    function openCamera() {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {

            let data = {
                msg_text: image.path,
                type: 'receiver',
                msg_type: 'image',
            }
            console.log(data);
            setchatData(s => [...s, data])
        });
    }
    function openGallery() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            let data = {
                msg_text: image.path,
                type: 'receiver',
                msg_type: 'image',
            }
            setchatData(s => [...s, data])
            setShow(false)

        });
    }
    useEffect(() => {
        console.log('chatData', chatData);
        setModalVisible(false)
    }, [chatData])

    return (
        <Container>
            <ChatHeader toggleModal={() => toggleModal()} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1
                }}
            >
                <View
                    style={{
                        ...styles.box_view,
                        backgroundColor: 'rgba(45, 45, 45, 0.1)'
                    }}
                >
                    <Text style={{
                        ...styles.today_txt,
                        color: colors.secondaryFontColor
                    }}>Today</Text>
                </View>

                <Pressable
                    onPress={() => setShow(false)}
                    style={styles.main_view}
                >
                    {chatData.map((item, index) => {
                        return (
                            <>
                                {item.msg_type == 'image' ? <>
                                    <Image
                                        source={{ uri: item.msg_text }}
                                        style={{
                                            width: 197,
                                            height: 140,
                                            alignSelf: item.type == 'sender' ? "flex-end" : 'flex-start',
                                            borderRadius: moderateScale(10),
                                            marginTop: moderateScale(10)

                                        }}
                                    />
                                </> :
                                    <View
                                        key={index}
                                        style={{
                                            ...styles.chat_box_view,
                                            backgroundColor: item.type == 'sender' ? '#F74A81' : 'rgba(45, 45, 45, 0.1)',
                                            alignSelf: item.type == 'sender' ? 'flex-end' : 'flex-start',
                                            borderBottomLeftRadius: moderateScale(10),
                                            borderBottomRightRadius: item.type == 'sender' ? 0 : moderateScale(10),
                                            borderTopRightRadius: moderateScale(10),
                                            borderTopLeftRadius: item.type == 'sender' ? moderateScale(10) : 0
                                        }}
                                    >
                                        <Text style={{
                                            ...styles.msg_txt,
                                            color: item.type == 'sender' ? colors.secondaryThemeColor : colors.primaryFontColor
                                        }}>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit ?</Text>

                                        <View
                                            style={{
                                                flex: 1
                                            }}
                                        />
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                alignSelf: 'flex-end',
                                            }}
                                        >

                                            <Text style={{
                                                ...styles.time_txt,
                                                color: item.type == 'sender' ? colors.secondaryThemeColor : colors.borderColor
                                            }}>20.00</Text>
                                            {item.type == 'receiver' ?
                                                <Icon
                                                    name='checkmark-done'
                                                    type='Ionicon'
                                                    style={{
                                                        marginLeft: moderateScale(5)
                                                    }}
                                                    color={colors.borderColor}
                                                />
                                                :
                                                null
                                            }
                                        </View>
                                    </View>}
                            </>
                        )
                    })}

                </Pressable>
                <View
                    style={{
                        marginHorizontal: moderateScale(15),
                    }}
                >
                    <FlatList
                        horizontal={true}
                        data={botData}
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    style={{
                                        ...styles.box_view_for_bot,
                                        borderColor: colors.borderColor,
                                        marginTop: moderateScale(10)
                                    }}
                                >
                                    <Text style={styles.auto_suggestion_msg}>{item.msg}</Text>
                                </View>
                            )
                        }}

                    />
                </View>

            </ScrollView>

            <Pressable
                onPress={() => setShow(false)}
                style={styles.horizontal_view}
            >
                <View
                    style={{
                        ...styles.horizontal_view_text_input,
                    }}
                >
                    <View
                        style={{
                            ...styles.msg_box,
                            backgroundColor: 'rgba(45, 45, 45, 0.05)'
                        }}
                    >
                        <Icon
                            name='smile'
                            type='Feather'
                            color={'rgba(45, 45, 45, 0.5)'}
                        />

                        <Icon
                            name='file-gif-box'
                            type='MaterialCommunityIcon'
                            color={'rgba(45, 45, 45, 0.5)'}
                            size={25}
                            style={{
                                marginLeft: moderateScale(5)
                            }}
                        />

                        <TextInput
                            placeholder='Type a message...'
                            style={styles.app_txt_style}
                            multiline={true}
                        />
                        <Pressable
                            onPress={() => setShow(true)}
                        >
                            <Icon
                                name='attachment'
                                type='Entypo'
                                color={'rgba(45, 45, 45, 0.5)'}
                            />
                        </Pressable>
                        {show ?
                            <Card
                                onFocus={() => setShow(false)}
                                style={{
                                    position: 'absolute',
                                    zIndex: 9999,
                                    bottom: moderateScale(60),
                                    right: moderateScale(0),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: colors.secondaryThemeColor,
                                    flex: 1
                                }}
                            >
                                {attachmentData.map((item, index) => {
                                    return (
                                        <Pressable
                                            onPress={() => openGallery()}
                                        >
                                            <Image
                                                source={item.img}
                                                resizeMode='contain'
                                                style={styles.img_style}
                                            />
                                        </Pressable>

                                    )
                                })}

                            </Card>
                            :
                            null
                        }
                        <Pressable
                            onPress={() => openCamera()}
                        >
                            <Icon
                                name='camera'
                                type='FontAwesome'
                                color={'rgba(45, 45, 45, 0.5)'}
                                style={{
                                    marginHorizontal: moderateScale(10)
                                }}
                            />
                        </Pressable>

                    </View>

                    <View
                        style={{
                            ...styles.circle_view,
                            backgroundColor: colors.primaryThemeColor
                        }}
                    >
                        <Icon
                            name='microphone'
                            type='FontAwesome'
                            color={colors.secondaryThemeColor}
                        />
                    </View>
                </View>


            </Pressable>
            <Modal
                isVisible={isModalVisible}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
                statusBarTranslucent={true}
                style={{
                    marginHorizontal: 0,
                    justifyContent: 'flex-end',
                    marginBottom: 0
                }}
            >
                <ModalForThreeDot />
            </Modal>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    today_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(11),
        lineHeight: moderateScale(14.75)
    },
    box_view: {
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(10),
        width: moderateScale(69),
        height: moderateScale(35),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(10),
    },
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        justifyContent: 'flex-end',
        flex: 1,
    },
    chat_box_view: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(10),
        marginBottom: moderateScale(10),
        width: '90%',
        flexDirection: 'row'
    },
    msg_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(13)
    },
    horizontal_view: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(15)
    },
    horizontal_view_text_input: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    msg_box: {
        flexDirection: 'row',
        alignItems: 'center',
        width: moderateScale(270),
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(10),
        marginVertical: moderateScale(20)
    },
    app_txt_input_cont_style: {
        height: moderateScale(45),
        paddingLeft: moderateScale(5),
        borderWidth: 0
    },
    app_txt_style: {
        width: '58%',
        fontFamily: FONTS.medium,
        fontSize: moderateScale(11),
        minHeight: moderateScale(50),
        maxHeight: moderateScale(150)
    },
    circle_view: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(28),
        marginLeft: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    time_txt: {
        textAlign: 'right',
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10)
    },
    img_style: {
        height: moderateScale(40),
        width: moderateScale(40),
        marginHorizontal: moderateScale(5),
    },
    box_view_for_bot: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(35),
        marginRight: moderateScale(15),
        padding: moderateScale(10),
        borderRadius: moderateScale(2)
    },
    auto_suggestion_msg: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(10),
        lineHeight: 14.75
    }

});

//make this component available to the app
export default IcebreakerBotChat;
