// @flow
import React, { useState, useEffect } from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import { useSelector } from 'react-redux';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { getString, translateEnum } from '../../static/locale';
import { Colors } from '../../styles';

import experiment1 from '../../static/assets/img/experiment4.png';
import NoAppointmentsContainer from './NoAppointmentsContainer';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import {
  getUser,
} from '../../graphql/queries.ts';
import {

} from '../../graphql/mutations.ts';
import ButtonLarge from '../../Components/buttons/ButtonLarge/ButtonLarge';

const initialState = { name: '', description: '' };

const NextAppointments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentAppointments } = useSelector((state) => ({ currentAppointments: state.appointments.currentAppointments }));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    API.graphql(graphqlOperation(getUser, { id: 'pabloearg@gmail.com' }));
  }, []);

  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  const addAppointments = () => {
    API.graphql(graphqlOperation(createUser, {
      input: {
        id: 'pabloearg@gmail.com',
        email: 'pabloearg@gmail.com',
        firstName: 'Pablo',
        lastName: 'Arguimbau',
        filedId: '19045',
        quantityViolations: 0,
        cleanDate: null,
        type: 'student',
        classes: [],
        appointments: [{
          experimentId: '1',
          uuid: '1',
          hour: '09:00',
          day: '2021-10-10',
        }]
      }
    }));
  };

  useEffect(() => {
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  if (isLoading) {
    return (<FullScreenLoader />);
  }
  return (<ButtonLarge onPress={addAppointments} text="ADD APPOINTMENT" />);
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
