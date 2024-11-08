//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Icon, Text, useTheme, } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';

const {height,width} = Dimensions.get('window')
// create a component
const ModalForThreeDot = ({ }) => {
    const colors = useTheme()
    return (
        <View
            style={{
                ...styles.modal_view,
                backgroundColor: colors.secondaryThemeColor,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: moderateScale(10)
                }}
            >
                <Icon
                    name='delete'
                    type='AntDesign'
                />

                <Text style={styles.delete_txt}>Delete Chat</Text>
            </View>
                <View 
                style={{
                    height: 1,
                    backgroundColor: 'rgba(45, 45, 45, 0.4)',
                    marginTop: moderateScale(10)
                }}
                />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: moderateScale(10)
                }}
            >
                <Icon
                    name='block'
                    type='Entypo'
                />

                <Text style={styles.delete_txt}>Block and Report</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    modal_view: {
        height: height / 4.5,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        paddingHorizontal: moderateScale(15),
        justifyContent: 'center'

    },
    delete_txt: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(15)
    }
});

//make this component available to the app
export default ModalForThreeDot;
