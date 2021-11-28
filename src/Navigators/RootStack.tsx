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
      <Stack.Screen
        name={Screens[ScreensNames.SELECT_EXPERIMENT].name}
        component={Screens[ScreensNames.SELECT_EXPERIMENT].component}
        options={Screens[ScreensNames.SELECT_EXPERIMENT].options}
      />
      <Stack.Screen
        name={Screens[ScreensNames.SELECT_DATE].name}
        component={Screens[ScreensNames.SELECT_DATE].component}
        options={Screens[ScreensNames.SELECT_DATE].options}
      />
      <Stack.Screen
        name={Screens[ScreensNames.CONFIRM_APPOINTMENT].name}
        component={Screens[ScreensNames.CONFIRM_APPOINTMENT].component}
        options={Screens[ScreensNames.CONFIRM_APPOINTMENT].options}
      />
      <Stack.Screen
        name={Screens[ScreensNames.APPOINTMENT_DETAIL].name}
        component={Screens[ScreensNames.APPOINTMENT_DETAIL].component}
        options={Screens[ScreensNames.APPOINTMENT_DETAIL].options}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
