// @flow
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { StackNavigationOptions } from '@react-navigation/stack';
import Screens from '../screens/Screens';
import ScreensNames from '../screens/ScreensNames';
import { BLUE_HEADER, WHITE } from '../styles/colors';
import { colorHeaderStyle } from '../styles/header';
import { getString, translateEnum } from '../static/locale';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const RootStack = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: true,
    gestureEnabled: true,
    headerBackTitle: '',
    headerBackTitleVisible: false,
  };
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen
        name={Screens[ScreensNames.HOME].name}
        component={Home}
        options={Screens[ScreensNames.HOME].options}
      />

      <Stack.Screen
        name={Screens[ScreensNames.SPLASH].name}
        component={Screens[ScreensNames.SPLASH].component}
        options={Screens[ScreensNames.SPLASH].options}
      />
      <Stack.Screen
        name={Screens[ScreensNames.LOGIN].name}
        component={Screens[ScreensNames.LOGIN].component}
        options={{ title: 'Login', headerTitle: 'Login', ...colorHeaderStyle }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;