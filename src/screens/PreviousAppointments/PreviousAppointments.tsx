import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { getString, translateEnum } from '../../static/locale';
import { Colors } from '../../styles';
import experiment1 from '../../static/assets/img/experiment1.png';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import NoPreviousAppointmentsContainer from './NoPreviousAppointmentsContainer';
import { useSelector } from 'react-redux';
import { AppointmentTakenRL } from '../../API';
import { Card } from 'react-native-elements';
import { getFormatedDayFromAppointment, getHourFromAppointment } from '../../utils/utils';
import { BLACK } from '../../styles/colors';
import ScreensNames from '../ScreensNames';
import { useNavigation } from '@react-navigation/core';

const PreviousAppointments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation();
  const experiments = useSelector((state: any) => state?.config?.experiments);
  const oldAppointments: AppointmentTakenRL[] = useSelector((state: any) => state?.appointments?.oldAppointments?.data);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);


  const goToExperiment = (_experiment: any, _time: any) => {
    navigate(ScreensNames.APPOINTMENT_DETAIL, { experiment: _experiment, time: _time });
  };

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
    // width: 120,
    // borderRadius: 60,
    // marginVertical: 35,
    alignSelf: 'center'
  },
  normalText: {
    alignSelf: 'center', textAlign: 'center', marginTop: 15
  },
});

