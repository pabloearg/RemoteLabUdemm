import React, { useState, useEffect } from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import { useSelector } from 'react-redux';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { getString, translateEnum } from '../../static/locale';
import { Colors } from '../../styles';

import experiment1 from '../../static/assets/img/experiment4.png';
import NoAppointmentsContainer from './NoAppointmentsContainer';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';

const initialState = { name: '', description: '' };

const NextAppointments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentAppointments } = useSelector((state) => ({ currentAppointments: state.appointments.currentAppointments }));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  if (isLoading) {
    return (<FullScreenLoader />);
  }
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
