import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import 'react-native-get-random-values';
import { Card, } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/core';
import NoStudentsContainer from './NoStudentsContainer';
import FullScreenLoader from '../../../Components/FullScreenLoader/FullScreenLoader';
import { configActions } from '../../../store/actions/config';
import { userActions } from '../../../store/actions/user';
import { appointmentActions } from '../../../store/actions/appointments';
import ScreensNames from '../../ScreensNames';
import TextHeadings from '../../../Components/TextHeadings/TextHeadings';
import { AppointmentStudentRL, AppointmentTakenRL, SubjectRL } from '../../../API';
import { getFormatedDayFromAppointment, getHourFromAppointment } from '../../../utils/utils';
import { BLACK } from '../../../styles/colors';
import { FromTypeAppointment } from '../../../types';

const SubjectsContainer = ({ }) => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const subjects: SubjectRL[] = useSelector((state: any) => state?.user?.subjects);
  const routeinfo: any = useRoute();

  const goToSubject = (item: SubjectRL) => {
    navigate(ScreensNames.STUDENTS, {
      subject: item
    })
  }

  console.log("subjects subjects: ", subjects)
  const renderItem = ({ item }: { item: SubjectRL }) => {
    return (<TouchableOpacity onPress={() => goToSubject(item)}>
      <Card>
        <Card.Title>{"Universidad"}</Card.Title>
        <Card.Title>{item.university}</Card.Title>
        <TextHeadings
          type="h3"
          text={"Curso"}
          color="black"
          styleText={styles.boldText}
        />
        <TextHeadings
          type="h3"
          text={item.name}
          color="black"
          styleText={styles.normalText}
        />
        <TextHeadings
          type="h3"
          text={"Turno"}
          color="black"
          styleText={styles.boldText}
        />
        <TextHeadings
          type="h3"
          text={item.periodBlock}
          color="black"
          styleText={styles.normalText}
        />
      </Card>
    </TouchableOpacity>)
  }
  if (isLoading) {
    return <FullScreenLoader color={BLACK} />
  }

  if (subjects?.length === 0) { return (<NoStudentsContainer />); }
  return (
    <>
      <FlatList
        renderItem={renderItem}
        data={subjects}
        style={{ padding: 28, }} contentContainerStyle={{ paddingBottom: 50 }}
      />
    </>
  );
  return <View></View>
};

export default SubjectsContainer;

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
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: "normal"
  },
  boldText: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 15,
  },
});
