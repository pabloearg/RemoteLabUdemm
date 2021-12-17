import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import 'react-native-get-random-values';
import { Card, } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/core';
import NoAppointmentsContainer from './NoAppointmentsContainer';
import FullScreenLoader from '../../../Components/FullScreenLoader/FullScreenLoader';
import { configActions } from '../../../store/actions/config';
import { userActions } from '../../../store/actions/user';
import { appointmentActions } from '../../../store/actions/appointments';
import ScreensNames from '../../ScreensNames';
import TextHeadings from '../../../Components/TextHeadings/TextHeadings';
import { AppointmentStudentRL, AppointmentTakenRL, Student } from '../../../API';
import { getFormatedDayFromAppointment, getHourFromAppointment } from '../../../utils/utils';
import { BLACK } from '../../../styles/colors';
import { FromTypeAppointment } from '../../../types';
import { AppointmentApi } from '../../../APIs/appointments';
import { Images } from '../../../static/assets/Images';

const StudentsAppointmentsContainer = () => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [appointments, setAppointments] = useState([])
  const routeinfo: any = useRoute();
  const student: Student = routeinfo.params?.student
  const experiments = useSelector((state: any) => state?.config?.experiments);

  const dispatch = useDispatch();
  useEffect(() => {
    initAll()
  }, []);

  const initAll = async () => {
    try {
      const appointmentResponse: any = await AppointmentApi.getAppointmentsByUser(student?.email)
      const appointmentsArray = appointmentResponse?.data?.listAppointmentStudentRLs?.items;
      setAppointments(appointmentsArray)
      await dispatch(configActions.getConfig());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  const goToExperiment = (_experiment: any, _appointment: any) => {
    navigate(ScreensNames.APPOINTMENT_DETAIL, {
      experiment: _experiment,
      appointment: _appointment,
      from: FromTypeAppointment.teacher
    });
  };

  // TODO: script para agregar appointments
  // const addAppointmentsScript = () => {
  //   AppointmentApi.addExperiments('1')
  // }

  const renderItem = ({ item }: { item: AppointmentStudentRL }) => {
    const experiment = experiments[item.experimentId]
    return (<TouchableOpacity onPress={() => goToExperiment(experiment, item)}>
      <Card>
        <Card.Title>{experiment.name}</Card.Title>
        <Card.Image source={Images.experiments[experiment?.uuid]} style={styles.icon} resizeMode="contain" />
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

  if (appointments?.length === 0) { return (<NoAppointmentsContainer />); }
  return (
    <>
      <FlatList
        renderItem={renderItem}
        data={appointments}
        style={{ padding: 28, }} contentContainerStyle={{ paddingBottom: 50 }}
      />
    </>
  );
};

export default StudentsAppointmentsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  icon: {
    height: 120,
    alignSelf: 'center'
  },
  normalText: {
    alignSelf: 'center', textAlign: 'center', marginTop: 15
  },
});
