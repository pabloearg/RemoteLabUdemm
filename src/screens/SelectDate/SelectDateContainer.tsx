/* eslint-disable import/extensions */
// @flow
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRoute } from '@react-navigation/core';
import { sortBy } from 'lodash';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import nextIcon from '../../static/assets/img/arrow-next.png';
import type {
  DateAppoinment,
  Experiment,
} from '../../types';
import DateRow from './DateRow';
import { selectDateStyles } from './styles';
import 'moment/locale/es-mx';
import { AppointmentApi } from '../../APIs/appointments';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import NoAppointmentsAvailable from './components/NoAppointmentsAvailable';
import { BLACK } from '../../styles/colors';
import { useSelector } from 'react-redux';
import { UserRL } from '../../API';

moment.locale('es-mx');
const DAY_QUANTITY = 1
let dayCounter = DAY_QUANTITY;
let dayCounterFix = DAY_QUANTITY;
const SelectDateContainer = ({
}) => {
  const routeinfo: any = useRoute();
  const experiment: Experiment = routeinfo?.params?.experiment
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingIn, setIsLoadingIn] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [currentDay, setCurrentDay] = useState(null)
  const user: UserRL = useSelector((state: any) => state?.user?.data);
  useEffect(() => {
    dayCounter = DAY_QUANTITY + (user?.quantityViolations ?? 0) * 3;
    dayCounterFix = DAY_QUANTITY + (user?.quantityViolations ?? 0) * 3;
  }, [])
  useEffect(() => {
    getEmptyAppointments(dayCounter);
    return () => {

    };
  }, []);
  const getEmptyAppointments = async (day = DAY_QUANTITY) => {
    try {
      setIsLoadingIn(true)
      const exactDay = moment().add('days', dayCounter).format('MM-DD-yyyy');
      const response: any = await AppointmentApi.getAppointmentsByExperimentIdAndDay(exactDay, experiment.uuid, '');
      let appointmentsItems = response?.data?.appointmentByDayAndExperimentUserless?.items;
      if (appointmentsItems.length === 0 && dayCounter <= 14) {
        dayCounter += 1;
        await getEmptyAppointments(dayCounter);
        return
      }
      if (appointmentsItems.length === 0) {
        throw new Error('over 14 times');
      }
      setIsLoading(false);
      setIsLoadingIn(false)
      appointmentsItems = sortBy(appointmentsItems, ['hour']);
      setAppointments(appointmentsItems);
    } catch (error: any) {
      setIsLoading(false);
      setIsLoadingIn(false)
      setErrorResponse(error);
      console.log({ error });
    }
  };

  const getExactDate = () => {
    const exactDay = moment().add('days', dayCounter).format('DD MMM');
    return exactDay
  }

  const searchNext = () => {
    dayCounter = dayCounter + 1
    getEmptyAppointments(dayCounter)
  }

  const searchPrev = () => {
    if (dayCounter)
      dayCounter = dayCounter - 1
    getEmptyAppointments(dayCounter)
  }

  const renderItem = ({ item }: { item: DateAppoinment }) => (
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
          {(dayCounter <= dayCounterFix) ? <View style={selectDateStyles.iconLeft} /> :
            <TouchableOpacity onPress={searchPrev}>
              <Image
                source={nextIcon}
                style={selectDateStyles.iconLeft}
              />
            </TouchableOpacity>}
          <TextHeadings
            text={getExactDate()}
            color="black"
            type="h1"
          />
          <TouchableOpacity onPress={searchNext}>
            <Image
              source={nextIcon}
              style={selectDateStyles.iconRight}
            />
          </TouchableOpacity>
        </View>
        {isLoadingIn ? <View style={{ paddingTop: 140 }}><FullScreenLoader color={BLACK} /></View> :
          <FlatList
            renderItem={renderItem}
            data={appointments}
            showsVerticalScrollIndicator={false}
          />}
      </View>
    );
  }

  return (
    <FullScreenLoader color="black" />
  );
};

export default SelectDateContainer;
