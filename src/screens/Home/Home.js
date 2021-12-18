// @flow
import React, { useState } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screens from '../Screens';
import ScreensNames from '../ScreensNames';
import { colorHeaderStyle } from '../../styles/header';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import useBackButton from '../../hooks/back';

const Tab = createMaterialTopTabNavigator();

function Home() {

  const {  setParams } = useNavigation();
  const navigation: any = useNavigation();
  const [disable, setDisable] = useState(false)
  useBackButton({
    setParams,
    navigation,
    disable,
  });
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setDisable(false)
      console.log("enter")
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        setDisable(true)
        console.log("exit")
      };
    }, [])
  );
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
