//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppBar, Container, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Points from './Points';
import Questions from './Questions';

const Tab = createMaterialTopTabNavigator();
// create a component
const Rewards = () => {
    const colors = useTheme()
    return (
        <Container>
            <AppBar
                title='Chat'
                titlePosition='left'
                style={styles.header_title_txt}
                titleStyle={styles.titleStyle}
            />
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: colors.pageBackgroundColor,
                        justifyContent: 'space-between',
                        elevation: 8,
                    },
                    tabBarActiveTintColor: colors.primaryThemeColor,
                    tabBarInactiveTintColor: colors.secondaryFontColor,
                    tabBarLabelStyle: {
                        fontFamily: FONTS.medium,
                        fontSize: 14,
                        textTransform: 'capitalize',
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: colors.primaryThemeColor,

                    },

                }}
            >
                <Tab.Screen name="Points" component={Points} />
                <Tab.Screen name="Questions" component={Questions} />
            </Tab.Navigator>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    header_title_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    },
    titleStyle: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(16)
    },
    main_view: {
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    }
});

//make this component available to the app
export default Rewards;
