// @flow
import React, { useRef } from 'react';

import type { StackNavigationOptions } from '@react-navigation/stack';
import { Button } from 'react-native';
import { getString, translateEnum } from '../static/locale';
import { colorHeaderStyle } from '../styles/header';
import LoginContainer from './Login/LoginContainer';
import NextAppointments from './NextAppointments/NextAppointments';
import PreviousAppointments from './PreviousAppointments/PreviousAppointments';
import ScreensNames from './ScreensNames';
import Splash from './Splash/SplashContainer';
import AddIcon from '../Components/AddIcon/AddIcon';
import SelectExperiment from './SelectExperiment/SelectExperiment';
import SelectDate from './SelectDate';
// import Home from '../Navigators/Home';

const Screens: {
  [name: string]: {
    name: string,
    component: Node,
    options: StackNavigationOptions
  }
} = {
  [ScreensNames.SPLASH]: {
    name: ScreensNames.SPLASH,
    component: Splash,
    options: {
      title: getString(translateEnum.INTRO_APPOINTMENT_TITLE), ...colorHeaderStyle
    }
  },
  [ScreensNames.HOME]: {
    name: ScreensNames.HOME,
    options: {
      title: getString(translateEnum.INTRO_APPOINTMENT_TITLE),
      ...colorHeaderStyle,
      headerRight: (props) => (
        <AddIcon />
      ),
    }
  },
  [ScreensNames.LOGIN]: {
    name: ScreensNames.LOGIN,
    component: LoginContainer,
  },
  [ScreensNames.PREVIOUS_APPOINTMENT]: {
    name: ScreensNames.PREVIOUS_APPOINTMENT,
    component: PreviousAppointments,
    options: { title: getString(translateEnum.INTRO_APPOINTMENT_PREVIOUS) }
  },
  [ScreensNames.NEXT_APPOINTMENT]: {
    name: ScreensNames.NEXT_APPOINTMENT,
    component: NextAppointments,
    options: { title: getString(translateEnum.INTRO_APPOINTMENT_NEXT) }
  },
  [ScreensNames.SELECT_EXPERIMENT]: {
    name: ScreensNames.SELECT_EXPERIMENT,
    component: SelectExperiment,
    options: { title: getString(translateEnum.SELECT_EXPERIMENT_TITLE) }
  },
  [ScreensNames.SELECT_DATE]: {
    name: ScreensNames.SELECT_DATE,
    component: SelectDate,
    options: { title: getString(translateEnum.SELECT_DATE_TITLE) }
  },
};

export default Screens;
