import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import NoPreviousAppointmentsContainer from './NoPreviousAppointmentsContainer';
import { useSelector } from 'react-redux';
import { AppointmentStudentRL, AppointmentTakenRL } from '../../API';
import { Card } from 'react-native-elements';
import { getFormatedDayFromAppointment, getHourFromAppointment } from '../../utils/utils';
import { BLACK } from '../../styles/colors';
import ScreensNames from '../ScreensNames';
import { useNavigation } from '@react-navigation/core';
import { FromTypeAppointment } from '../../types';

const PreviousAppointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useNavigation();
  const experiments = useSelector((state: any) => state?.config?.experiments);
  const oldAppointments: any[] = useSelector((state: any) => state?.appointments?.oldAppointments?.data);

  const goToExperiment = (_experiment: any, _appointment: any) => {
    navigate(ScreensNames.APPOINTMENT_DETAIL, {
      experiment: _experiment,
      appointment: _appointment,
      from: FromTypeAppointment.previous
    });
  };

  const renderItem = ({ item }: { item: AppointmentStudentRL }) => {
    const experiment = experiments[item.experimentId]
    return (<TouchableOpacity onPress={() => goToExperiment(experiment, item)}>
      <Card>
        <Card.Title>{experiment.name}</Card.Title>
        <Card.Image source={{ uri: experiment?.iconUrl }} style={styles.icon} resizeMode="contain" />
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

  console.log("oldAppointments: ", oldAppointments)
  if (oldAppointments?.length === 0) { return (<NoPreviousAppointmentsContainer />); }
  return (
    <>
      <FlatList
        renderItem={renderItem}
        data={oldAppointments}
        style={{ padding: 28, }} contentContainerStyle={{ paddingBottom: 50 }}
      />
    </>
  );
};

export default PreviousAppointments;


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

