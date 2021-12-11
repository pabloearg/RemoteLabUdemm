import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, } from 'react-native-elements';
import ButtonFooter from '../../Components/buttons/ButtonFooter/ButtonFooter';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import {
  Experiment,
  FromTypeAppointment,
} from '../../types';
import {
  AppointmentStudentRL,
  UserRL,
} from '../../API';
import {
  getFormatedDayFromAppointment,
  getHourFromAppointment,
} from '../../utils/utils';
import { useSelector } from 'react-redux';
import { AppointmentApi } from '../../APIs/appointments';
import { find } from 'lodash';

const AppointmentDetail = () => {
  const navigation = useNavigation();
  const routeinfo = useRoute();
  const params: any = routeinfo?.params
  const [isLoading, setIsLoading] = useState(false)
  const experiment: Experiment = params?.experiment;
  const appointment: AppointmentStudentRL = params?.appointment;
  const from: FromTypeAppointment = params?.from
  const user: UserRL = useSelector((state: any) => state?.user?.data);
  const hasViolations = user?.quantityViolations && user?.quantityViolations > 2
  console.log('experiment: ', experiment);

  const cancelAppointment = async () => {
    try {
      await AppointmentApi.createSubjects()
      return
      setIsLoading(true)
      const appointmentsRL: any = await AppointmentApi.getAppointmentsByExperimentIdAndDay(appointment.day, appointment.experimentId)
      const _appoint = find(appointmentsRL?.data?.appointmentByDayAndExperimentUserless?.items, (_appointment) => {
        return appointment.day === _appointment.day
      })
      console.log("_appoint: ", _appoint)
      await AppointmentApi.cancelAppointment(
        _appoint,
        appointment,
        user
      )
      navigation.goBack()
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)

    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Card containerStyle={{
        alignContent: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 50
      }}
      >
        {/* <Card.Title style={{}}>{experiment.name}</Card.Title> */}

        {/* <TextHeadings
          type="h2"
          text="Experimento"
          color="black"
          styleText={styles.titleText}
        /> */}
        <TextHeadings
          type="h2"
          text={experiment.name}
          color="black"
          styleText={styles.normalText}
        />
        <Card.Image source={{ uri: experiment?.iconUrl }} style={styles.icon} resizeMode="contain" />
        {/* <Card.Divider /> */}
        <TextHeadings
          type="h3"
          text="Fecha"
          color="black"
          styleText={styles.titleText}
        />
        <TextHeadings
          type="h4"
          text={getFormatedDayFromAppointment(appointment)}
          color="black"
          styleText={styles.normalText}
        />
        <TextHeadings
          type="h3"
          text="Hora"
          color="black"
          styleText={styles.titleText}
        />
        <TextHeadings
          type="h4"
          text={getHourFromAppointment(appointment)}
          color="black"
          styleText={styles.normalText}
        />
        {from === FromTypeAppointment.next && <><TextHeadings
          type="h3"
          text="Pausible de penalizacion?"
          color="black"
          styleText={styles.titleText}
        />
          <TextHeadings
            type="h4"
            text={hasViolations ? "SI" : "NO"}
            color="black"
            styleText={styles.normalText}
          />
        </>}
      </Card>
      <View style={{ flex: 1 }} />
      {from === FromTypeAppointment.next && <ButtonFooter
        onPress={cancelAppointment}
        text="CANCELAR TURNO"
        isInvestmentButton
        loading={isLoading}
      />}
    </View>
  );
};

export default AppointmentDetail;

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
    alignSelf: 'center',
    marginTop: 20,
  },
  titleText: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 8,
  },
  normalText: {
    alignSelf: 'center', textAlign: 'center',
  },
});
