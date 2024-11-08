//import liraries
import React, { Component } from 'react';
import { View,  StyleSheet } from 'react-native';
import { Container, Text, Icon, useTheme, AppButton } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import BackHeader from '../../Components/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';

// create a component
const AddImage = () => {
    const colors = useTheme()
    return (
        <Container>
            <BackHeader 
            title={'Add your Image'}
            />
            <View
            style={styles.main_view}
            >
                <View
                style={{...styles.box_view,
                borderColor: colors.borderColor
                }}
                >
                    <Icon 
                    name='image-outline'
                    type='Ionicon'
                    size={35}
                    color={colors.borderColor}
                    />
                    <Text style={{...styles.upload_img_txt,
                    color: colors.borderColor
                    }}>Upload Image</Text>
                </View>
                <View 
                style={{
                    flex:1
                }}
                />

                <AppButton 
                title='Post'
                style={styles.app_btn_styles}
                    textStyle={{...styles.app_btn_txt_style,
                    color: colors.secondaryThemeColor
                    }}
                />
            </View>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
main_view: {
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(10),
    flex: 1
},
box_view: {
    height: moderateScale(152),
    borderRadius: moderateScale(10),
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center'
},
upload_img_txt: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(14),
    marginTop: moderateScale(10)
},
app_btn_styles: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    marginVertical: moderateScale(20),
    height: moderateScale(55),
    borderRadius: moderateScale(30)
},
app_btn_txt_style: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(14)
}
});

//make this component available to the app
export default AddImage;
