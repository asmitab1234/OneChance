//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from 'react-native-basic-elements';
import AppStack from './App/Navigation/AppStack';
import AuthStack from './App/Navigation/AuthStack';
import NavigationService from './App/Services/Navigation';

const Stack = createStackNavigator();
// create a component
const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Theme.Provider
        theme={{
          light: {
            primaryThemeColor: '#FF2168',
            secondaryThemeColor: '#fff',
            primaryFontColor: '#000000',
            secondaryFontColor: '#2D2D2D',
            cardColor: 'rgba(255, 201, 218, 0.2)',
            headerColor: '#fff',
            pageBackgroundColor: '#FFFFFF',
            tabBarColor: '#fff',
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            statusBarStyle: 'dark-content',
            buttonColor: '#FF2168',
            borderColor: 'rgba(45, 45, 45, 0.6)'
          },
          dark: {
            primaryThemeColor: '#FF2168',
            secondaryThemeColor: '#fff',
            primaryFontColor: '#000000',
            secondaryFontColor: '#2D2D2D',
            cardColor: 'rgba(255, 201, 218, 0.2)',
            headerColor: '#fff',
            pageBackgroundColor: '#FFFFFF',
            tabBarColor: '#fff',
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            statusBarStyle: 'dark-content',
            buttonColor: '#FF2168',
            borderColor: 'rgba(45, 45, 45, 0.6)'
          },
        }}
        mode={isDark ? 'dark' : 'light'}
      >
        <NavigationContainer
          ref={r => NavigationService.setTopLevelNavigator(r)}
        >
          <Stack.Navigator
            initialRouteName='AuthStack'
            screenOptions={{
              headerShown: false,
              // gestureEnabled: true,
              // gestureDirection: 'horizontal',
              // ...TransitionPresets.ModalTransition,
            }}
          >
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="AppStack" component={AppStack} />

          </Stack.Navigator>
        </NavigationContainer>
      </Theme.Provider>


    </View>
  );
};

export default App;
