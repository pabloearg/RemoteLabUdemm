import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import 'react-native-get-random-values';

import NoAppointmentsContainer from './NoAppointmentsContainer';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import { configActions } from '../../store/actions/config';
import { userActions } from '../../store/actions/user';
import { appointmentActions } from '../../store/actions/appointments';

const initialState = { name: '', description: '' };

const NextAppointments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    dispatch(userActions.getUser());
    dispatch(appointmentActions.getNewUserAppointments('pabloearg@gmail.com'));
    dispatch(configActions.getConfig());
  }, []);

  // if (isLoading) {
  //   return (<FullScreenLoader />);
  // }

  return (<NoAppointmentsContainer />);
};

export default NextAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
