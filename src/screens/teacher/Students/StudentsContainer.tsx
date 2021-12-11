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
import { AppointmentStudentRL, AppointmentTakenRL, Student, SubjectRL } from '../../../API';
import { getFormatedDayFromAppointment, getHourFromAppointment } from '../../../utils/utils';
import { BLACK } from '../../../styles/colors';
import { FromTypeAppointment } from '../../../types';

const StudentsContainer = ({ }) => {
  const { navigate } = useNavigation();
  const routeinfo: any = useRoute();
  const subject: SubjectRL = routeinfo.params?.subject
  const students: Student[] = subject?.students

  const goToAppointments = (item: Student) => {
    console.log("goToAppointments: ", item)
    navigate(ScreensNames.STUDENTS_APPOINTMENTS, {
      student: item
    })
  }

  console.log("subjects subjects: ", students)
  const renderItem = ({ item }: { item: Student }) => {
    return (<TouchableOpacity onPress={() => goToAppointments(item)}>
      <Card>
        <TextHeadings
          type="h3"
          text={"Email"}
          color="black"
          styleText={styles.boldText}
        />
        <TextHeadings
          type="h3"
          text={item.email ?? ""}
          color="black"
          styleText={styles.normalText}
        />
        <TextHeadings
          type="h3"
          text={"Nombre"}
          color="black"
          styleText={styles.boldText}
        />
        <TextHeadings
          type="h3"
          text={item.firstName ?? ""}
          color="black"
          styleText={styles.normalText}
        />
        <TextHeadings
          type="h3"
          text={"Apellido"}
          color="black"
          styleText={styles.boldText}
        />
        <TextHeadings
          type="h3"
          text={item.lastName ?? ""}
          color="black"
          styleText={styles.normalText}
        />
      </Card>
    </TouchableOpacity>)
  }

  if (students?.length === 0) { return (<NoStudentsContainer />); }
  return (
    <>
      <FlatList
        renderItem={renderItem}
        data={students}
        style={{ padding: 28, }} contentContainerStyle={{ paddingBottom: 50 }}
      />
    </>
  );
};

export default StudentsContainer;

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
