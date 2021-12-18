// @flow
import React, { useRef } from 'react';

import type { StackNavigationOptions } from '@react-navigation/stack';
import { Button } from 'react-native';
import { getString, translateEnum } from '../static/locale';
import { colorHeaderStyle } from '../styles/header';
import LoginContainer from './Login/LoginContainer';
import NextAppointments from './NextAppointments/NextAppointments';
import ConfirmAppointment from './ConfirmAppointment';
import PreviousAppointments from './PreviousAppointments/PreviousAppointments';
import ScreensNames from './ScreensNames';
import Splash from './Splash/SplashContainer';
import AddIcon from '../Components/AddIcon/AddIcon';
import LogoutButton from '../Components/buttons/LogoutButton/LogoutButton';
import SelectExperiment from './SelectExperiment/SelectExperiment';
import SelectDate from './SelectDate';
import AppointmentDetail from './AppointmentDetail';
import SubjectsScreen from './teacher/Subjects';
import StudentsScreen from './teacher/Students';
import StudentsAppointmentsScreen from './teacher/StudentsAppointments';
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
      headerShown: false,
      title: getString(translateEnum.INTRO_APPOINTMENT_TITLE), ...colorHeaderStyle,
      gestureEnabled: false,
    }
  },
  [ScreensNames.SUBJECTS]: {
    name: ScreensNames.SUBJECTS,
    component: SubjectsScreen,
    options: {
      title: getString(translateEnum.SUBJECTS_TTILE), ...colorHeaderStyle,
      gestureEnabled: false,
      headerLeft: (props) => (
        <LogoutButton />
      ),
    }
  },
  [ScreensNames.STUDENTS_APPOINTMENTS]: {
    name: ScreensNames.STUDENTS_APPOINTMENTS,
    component: StudentsAppointmentsScreen,
    options: {
      title: "Turnos", ...colorHeaderStyle
    }
  },
  [ScreensNames.STUDENTS]: {
    name: ScreensNames.STUDENTS,
    component: StudentsScreen,
    options: {
      title: "Alumnos", ...colorHeaderStyle
    }
  },
  [ScreensNames.HOME]: {
    name: ScreensNames.HOME,
    options: {
      title: getString(translateEnum.INTRO_APPOINTMENT_TITLE),
      ...colorHeaderStyle,
      gestureEnabled: false,
      headerRight: (props) => (
        <AddIcon />
      ),
      headerLeft: (props) => (
        <LogoutButton />
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
    options: {
      title: getString(translateEnum.INTRO_APPOINTMENT_PREVIOUS),
      ...colorHeaderStyle,
      gestureEnabled: false,
    }
  },
  [ScreensNames.NEXT_APPOINTMENT]: {
    name: ScreensNames.NEXT_APPOINTMENT,
    component: NextAppointments,
    options: {
      title: getString(translateEnum.INTRO_APPOINTMENT_NEXT),
      ...colorHeaderStyle,
      gestureEnabled: false,
    }
  },
  [ScreensNames.SELECT_EXPERIMENT]: {
    name: ScreensNames.SELECT_EXPERIMENT,
    component: SelectExperiment,
    options: { title: getString(translateEnum.SELECT_EXPERIMENT_TITLE), ...colorHeaderStyle }
  },
  [ScreensNames.SELECT_DATE]: {
    name: ScreensNames.SELECT_DATE,
    component: SelectDate,
    options: { title: getString(translateEnum.SELECT_DATE_TITLE), ...colorHeaderStyle }
  },
  [ScreensNames.CONFIRM_APPOINTMENT]: {
    name: ScreensNames.CONFIRM_APPOINTMENT,
    component: ConfirmAppointment,
    options: { title: getString(translateEnum.CONFIRM_APPOINTMENT_TITLE), ...colorHeaderStyle }
  },
  [ScreensNames.APPOINTMENT_DETAIL]: {
    name: ScreensNames.APPOINTMENT_DETAIL,
    component: AppointmentDetail,
    options: { title: getString(translateEnum.APPOINTMENT_DETAIL_TITLE), ...colorHeaderStyle }
  },
};

export default Screens;
