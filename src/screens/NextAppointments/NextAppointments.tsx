import React, { useState, useEffect } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet, TouchableOpacity,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import 'react-native-get-random-values';

import { Card, } from 'react-native-elements';
import moment from 'moment';
import RNCalendarEvents from 'react-native-calendar-events';
import { useNavigation } from '@react-navigation/core';
import NoAppointmentsContainer from './NoAppointmentsContainer';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import { configActions } from '../../store/actions/config';
import { userActions } from '../../store/actions/user';
import { appointmentActions } from '../../store/actions/appointments';
import ScreensNames from '../ScreensNames';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { AppointmentStudentRL, AppointmentTakenRL } from '../../API';
import { getFormatedDayFromAppointment, getHourFromAppointment } from '../../utils/utils';
import { BLACK } from '../../styles/colors';

const NextAppointments = () => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const experiments = useSelector((state: any) => state?.config?.experiments);
  const newAppointments: AppointmentTakenRL[] = useSelector((state: any) => state?.appointments?.currentAppointments?.data);
  const dispatch = useDispatch();
  const time1 = moment('12/12/2021 14:00');
  useEffect(() => {
    initAll()
  }, []);

  const initAll = async () => {
    try {
      await dispatch(userActions.getUser());
      await dispatch(appointmentActions.getNewUserAppointments('pabloearg@gmail.com'));
      await dispatch(configActions.getConfig());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  if (false) { return (<NoAppointmentsContainer />); }
  const goToExperiment = (_experiment: any, _time: any) => {
    navigate(ScreensNames.APPOINTMENT_DETAIL, { experiment: _experiment, time: _time });
  };

  // TODO: script para agregar appointments
  // const addAppointmentsScript = () => {
  //   AppointmentApi.addExperiments('1')
  // }

  const renderItem = ({ item }: { item: AppointmentStudentRL }) => {
    const experiment = experiments[item.experimentId]
    return (<TouchableOpacity onPress={() => goToExperiment(item)}>
      <Card>
        <Card.Title>{experiment.name}</Card.Title>
        <Card.Image source={{ uri: experiment?.iconUrl }} style={styles.icon} resizeMode="contain" />
        {/* <Card.Divider /> */}
        <TextHeadings
          type="h4"
          text={`${getFormatedDayFromAppointment(item)} ${getHourFromAppointment(item)}`}
          color="black"
          styleText={styles.normalText}
        />
      </Card>
    </TouchableOpacity>)
  }
  if (isLoading) {
    return <FullScreenLoader color={BLACK} />
  }

  if (newAppointments?.length === 0) { return (<NoAppointmentsContainer />); }
  return (
    <>
      <FlatList
        renderItem={renderItem}
        data={newAppointments}
        style={{ padding: 28, }} contentContainerStyle={{ paddingBottom: 50 }}
      />
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
