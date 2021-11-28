/* eslint-disable import/extensions */
// @flow
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  FlatList, Image, StyleSheet, Text, View
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { sortBy } from 'lodash';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import arrowIcon from '../../static/assets/img/arrow_rigth.png';
import type {
  DateAppoinment,
  Experiment,
} from '../../types';
import calendarIcon from '../../static/assets/img/calendar.png';
import Separator from '../../Components/Separator/Separator';
import DateRow from './DateRow';
import { selectDateStyles } from './styles';
import 'moment/locale/es-mx';
import { AppointmentApi } from '../../APIs/appointments';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import NoAppointmentsAvailable from './components/NoAppointmentsAvailable';

moment.locale('es-mx');

const SelectDateContainer = ({
  navigation,
}) => {
  const { params: { experiment } } = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const [errorResponse, setErrorResponse] = useState(false);
  const [appointments, setAppointments] = useState([]);
  let dayCounter = 7;
  useEffect(() => {
    getEmptyAppointments(dayCounter);
    return () => {

    };
  }, []);
  const getEmptyAppointments = async (day = 7) => {
    try {
      const exactDay = moment().add('days', dayCounter).format('MM-DD-yyyy');
      const response = await AppointmentApi.getAppointmentsByExperimentIdAndDay(exactDay, experiment.uuid, '');
      let appointmentsItems = response?.data?.appointmentByDayAndExperimentUserless?.items;
      if (appointmentsItems.length === 0 && dayCounter <= 14) {
        dayCounter += 1;
        return await getEmptyAppointments(dayCounter);
      }
      if (appointmentsItems.length === 0) {
        throw new Error('over 14 times');
      }
      setIsLoading(false);
      appointmentsItems = sortBy(appointmentsItems, ['hour']);
      setAppointments(appointmentsItems);
    } catch (error) {
      setIsLoading(false);
      setErrorResponse(error);
      console.log({ error });
    }
  };

  const renderItem = ({ item }: {item: DateAppoinment}) => (
    <DateRow
      appointment={item}
    />
  );

  if (isLoading) {
    return (
      <FullScreenLoader color="black" />
    );
  }

  if (errorResponse) {
    return (
      <NoAppointmentsAvailable />
    );
  }
  if (appointments.length > 0) {
    return (
      <View style={selectDateStyles.container}>
        <View style={selectDateStyles.headerContainer}>
          <Image
            source={arrowIcon}
            style={selectDateStyles.iconLeft}
          />
          <TextHeadings
            text={moment().format('DD MMMM')}
            color="black"
            type="h1"
          />
          <Image
            source={arrowIcon}
            style={selectDateStyles.iconRight}
          />
        </View>
        <FlatList
          renderItem={renderItem}
          data={appointments}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <FullScreenLoader color="black" />
  );
};

export default SelectDateContainer;
