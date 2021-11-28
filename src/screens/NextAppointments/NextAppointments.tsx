import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet, TouchableOpacity,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import 'react-native-get-random-values';

import { PricingCard, Card, Text } from 'react-native-elements';
import moment from 'moment';
import RNCalendarEvents from 'react-native-calendar-events';
import { useNavigation } from '@react-navigation/core';
import NoAppointmentsContainer from './NoAppointmentsContainer';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import { configActions } from '../../store/actions/config';
import { userActions } from '../../store/actions/user';
import { appointmentActions } from '../../store/actions/appointments';
import { BLUE } from '../../styles/colors';
import { Experiment } from '../../types';
import ScreensNames from '../ScreensNames';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import {
  AppointmentApi
} from '../../APIs/appointments'
import { getAppointmentsArray } from '../../utils/scripts';
const initialState = { name: '', description: '' };

const newAppointments = {

};

const oldAppointments = {

};

const NextAppointments = () => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const experiments = useSelector((state) => state?.config?.experiments);
  const dispatch = useDispatch();
  const experiment: Experiment = experiments[1];
  const time1 = moment('12/12/2021 14:00');
  const time2 = moment('12/12/2021 14:15');
  const time3 = moment('12/12/2021 14:30');
  const time4 = moment('12/12/2021 14:45');
  const time5 = moment('12/12/2021 15:00');
  console.log('experiment', experiment);
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
  if (false) { return (<NoAppointmentsContainer />); }
  const goToExperiment = (_experiment, _time) => {
    navigate(ScreensNames.APPOINTMENT_DETAIL, { experiment: _experiment, time: _time });
  };
  const addToCalendar = async () => {
    navigate(ScreensNames.APPOINTMENT_DETAIL, { experiment });
    return;
    try {
      // const a = await RNCalendarEvents.checkPermissions();
      // console.log({ a });
      // const b = await RNCalendarEvents.requestPermissions();
      // console.log({ b });
      // RNCalendarEvents.saveEvent('probando', { startDate: new Date().toISOString(), });
      const calendars = await RNCalendarEvents.findCalendars();
      console.log({ calendars });
      await RNCalendarEvents.saveEvent('Remote Lab', {
        startDate: '2021-11-19T19:26:00.000Z',
        endDate: '2021-11-19T20:26:00.000Z',
      });
      // const a = await RNCalendarEvents.saveCalendar({
      //   source: {
      //     type: 'com.google',
      //     name: 'Pablo',
      //   },
      //   accessLevel: 'owner',
      //   color: 'red',
      //   name: 'Remote Lab',
      //   title: 'Remote Lab',
      //   ownerAccount: 'Pablo',
      //   entityType: 'event',
      // });
      // console.log({ a });
    } catch (error) {
      console.log(error);
    }
  };

  // TODO: script para agregar appointments
  // const addAppointmentsScript = () => {
  //   AppointmentApi.addExperiments('1')
  // }

  return (
    <>
      {/* <PricingCard
        color={BLUE}
        title={moment().toLocaleString()}
        price="Caida Libre"
        info={[moment().toLocaleString(), 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      /> */}
      <ScrollView style={{ padding: 28, }} contentContainerStyle={{ paddingBottom: 50 }}>
        <TouchableOpacity onPress={() => goToExperiment(experiments[1], time1)}>
          <Card>
            <Card.Title>Caida Libre</Card.Title>
            <Card.Image source={{ uri: experiment?.iconUrl }} style={styles.icon} resizeMode="contain" />
            {/* <Card.Divider /> */}
            <TextHeadings
              type="h4"
              text={time1.format('DD/MM/YYYY   hh:mm')}
              color="black"
              styleText={styles.normalText}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToExperiment(experiments[2], time2)}>
          <Card>
            <Card.Title>Caida Libre</Card.Title>
            <Card.Image source={{ uri: experiments[2]?.iconUrl }} style={styles.icon} resizeMode="contain" />
            {/* <Card.Divider /> */}
            <TextHeadings
              type="h4"
              text={time2.format('DD/MM/YYYY   hh:mm')}
              color="black"
              styleText={styles.normalText}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToExperiment(experiments[3], time3)}>
          <Card>
            <Card.Title>Caida Libre</Card.Title>
            <Card.Image source={{ uri: experiments[3]?.iconUrl }} style={styles.icon} resizeMode="contain" />
            {/* <Card.Divider /> */}
            <TextHeadings
              type="h4"
              text={time3.format('DD/MM/YYYY   hh:mm')}
              color="black"
              styleText={styles.normalText}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToExperiment(experiments[4], time4)}>
          <Card>
            <Card.Title>Caida Libre</Card.Title>
            <Card.Image source={{ uri: experiments[4]?.iconUrl }} style={styles.icon} resizeMode="contain" />
            {/* <Card.Divider /> */}
            <TextHeadings
              type="h4"
              text={time4.format('DD/MM/YYYY   hh:mm')}
              color="black"
              styleText={styles.normalText}
            />
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default NextAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  icon: {
    height: 120,
    // width: 120,
    // borderRadius: 60,
    // marginVertical: 35,
    alignSelf: 'center'
  },
  normalText: {
    alignSelf: 'center', textAlign: 'center', marginTop: 15
  },
});
