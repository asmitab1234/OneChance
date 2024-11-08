//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Connection from '../Screens/Connection/Connection';
import ViewProfile from '../Screens/ConnectionProfile/ViewProfile';
import Notification from '../Screens/Notification/Notification';
import AuthStack from './AuthStack';
import BottomTab from './BottomTab';
import ViewGallery from '../Screens/ConnectionProfile/ViewGallery';
import IcebreakerBotChat from '../Screens/Chat/IcebreakerBotChat';
import AudioCall from '../Screens/Chat/AudioCall';
import VideoCall from '../Screens/Chat/VideoCall';
import BrandQuestion from '../Screens/Rewards/BrandQuestion';
import Congratulations from '../Screens/Rewards/Congratulations';
import CreateArticles from '../Screens/Profile/CreateArticles';
import AddImage from '../Screens/Profile/AddImage';
import Personalnformation from '../Screens/Profile/PersonalInformation';
import Settings from '../Screens/Profile/Settings';
import Refer from '../Screens/Profile/Refer';
import FlashNote from '../Screens/Profile/FlashNote';
import MatchDetails from '../Screens/Matches/MatchDetails';
import Subscription from '../Screens/Profile/Subscription/Subscription';

const Stack = createStackNavigator();
// create a component
const AppStack = () => {
    // const { login_status } = useSelector(state => state.User)
    return (
        <Stack.Navigator
            initialRouteName='BottomTab'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Connection" component={Connection} />
            <Stack.Screen name="ViewProfile" component={ViewProfile} />
            <Stack.Screen name="ViewGallery" component={ViewGallery} />
            {/* Chat */}
            <Stack.Screen name="IcebreakerBotChat" component={IcebreakerBotChat} />
            <Stack.Screen name="AudioCall" component={AudioCall} />
            <Stack.Screen name="VideoCall" component={VideoCall} />
            {/* Rewards */}
            <Stack.Screen name="BrandQuestion" component={BrandQuestion} />
            <Stack.Screen name="CongratulationsRewards" component={Congratulations} />
            {/* about profile */}
            <Stack.Screen name="CreateArticles" component={CreateArticles} />
            <Stack.Screen name="AddImage" component={AddImage} />
            <Stack.Screen name="Personalnformation" component={Personalnformation} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Refer" component={Refer} />
            <Stack.Screen name="FlashNote" component={FlashNote} />
            {/* Matches */}
            <Stack.Screen name="MatchDetails" component={MatchDetails} />
            {/* Subscription */}
            <Stack.Screen name="Subscription" component={Subscription} />
        </Stack.Navigator>
    );
};

export default AppStack;
