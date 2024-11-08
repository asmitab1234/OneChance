//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Congratulations from '../Screens/Auth/Congratulations';
import FillProfile from '../Screens/Auth/FillProfile';
import Filter from '../Screens/Auth/Filter';
import Login from '../Screens/Auth/Login';
import OnBoarding from '../Screens/Auth/OnBoarding';
import OTPVerification from '../Screens/Auth/OTPVerification';
import SelectYourIdealMatch from '../Screens/Auth/SelectYourIdealMatch';
import SelectYourInterest from '../Screens/Auth/SelectYourInterest';
import SexualOrientation from '../Screens/Auth/SexualOrientation';
import ThankYouPage from '../Screens/Auth/ThankYouPage';
import UploadPhotos from '../Screens/Auth/UploadPhotos';

const Stack = createStackNavigator();
// create a component
const AuthStack = () => {
    // const { login_status } = useSelector(state => state.User)
    return (
        <Stack.Navigator
            initialRouteName='OnBoarding'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OTPVerification" component={OTPVerification} />
            <Stack.Screen name="ThankYouPage" component={ThankYouPage} />
            <Stack.Screen name="FillProfile" component={FillProfile} />
            <Stack.Screen name="UploadPhotos" component={UploadPhotos} />
            <Stack.Screen name="SexualOrientation" component={SexualOrientation} />
            <Stack.Screen name="SelectYourInterest" component={SelectYourInterest} />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen name="SelectYourIdealMatch" component={SelectYourIdealMatch} />
            <Stack.Screen name="Congratulations" component={Congratulations} />
           
        </Stack.Navigator>
    );
};

export default AuthStack;
