//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, PixelRatio, SafeAreaView } from 'react-native';
import { Icon, useTheme } from 'react-native-basic-elements';
import { useSelector } from 'react-redux';
import { COLORS } from '../Constants/Colors';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import Chat from '../Screens/Chat/Chat';
import Connection from '../Screens/Connection/Connection';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import Rewards from '../Screens/Rewards/Rewards';
import Matches from '../Screens/Matches/Matches';

const Tab = createBottomTabNavigator();
// create a component
const BottomTab = () => {
    const colors = useTheme()
    // const { userData, login_status } = useSelector(state => state.User);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primaryThemeColor,
                tabBarInactiveTintColor: '#777',
                tabBarLabelStyle: {
                    fontSize: moderateScale(8),
                    fontFamily: FONTS.regular,
                    marginBottom: moderateScale(5),
                },
                tabBarStyle: {
                    backgroundColor: colors.secondaryThemeColor,
                    height: moderateScale(60),
                    paddingBottom: 0,
                    paddingTop: moderateScale(10)
                },

            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Image
                                source={require('../Assets/images/BottomTab/homefocused.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />

                        }
                        else {
                            return <Image
                                source={require('../Assets/images/BottomTab/home.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />
                        }
                    }
                }}
            />

            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Image
                                source={require('../Assets/images/BottomTab/chat_focused.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />

                        }
                        else {
                            return <Image
                                source={require('../Assets/images/BottomTab/chat.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />
                        }
                    }
                }}
            />

            <Tab.Screen
                name="Matches"
                component={Matches}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Matches',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Image
                                source={require('../Assets/images/BottomTab/Matches-Focused.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />

                        }
                        else {
                            return <Image
                                source={require('../Assets/images/BottomTab/matches.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />
                        }
                    }
                }}
            />

            {/* <Tab.Screen
                name="Rewards"
                component={Rewards}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Rewards',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Image
                                source={require('../Assets/images/BottomTab/rewards_focused.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />

                        }
                        else {
                            return <Image
                                source={require('../Assets/images/BottomTab/rewards.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />
                        }
                    }
                }}
            /> */}

            <Tab.Screen
                name="Connection"
                component={Connection}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Connection',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Image
                                source={require('../Assets/images/BottomTab/connection_focused.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />

                        }
                        else {
                            return <Image
                                source={require('../Assets/images/BottomTab/connection.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />
                        }
                    }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Image
                                source={require('../Assets/images/BottomTab/profile_focused.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />

                        }
                        else {
                            return <Image
                                source={require('../Assets/images/BottomTab/profile.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(20),
                                    width: moderateScale(20)
                                }}
                            />
                        }
                    }
                }}
            />

        </Tab.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default BottomTab;
