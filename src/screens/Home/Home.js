// @flow
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screens from '../Screens';
import ScreensNames from '../ScreensNames';
import { colorHeaderStyle } from '../../styles/header';

const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens[ScreensNames.NEXT_APPOINTMENT].name}
        component={Screens[ScreensNames.NEXT_APPOINTMENT].component}
        options={Screens[ScreensNames.NEXT_APPOINTMENT].options}
      />
      <Tab.Screen
        name={Screens[ScreensNames.PREVIOUS_APPOINTMENT].name}
        component={Screens[ScreensNames.PREVIOUS_APPOINTMENT].component}
        options={Screens[ScreensNames.PREVIOUS_APPOINTMENT].options}
      />
    </Tab.Navigator>
  );
}

export default Home;
