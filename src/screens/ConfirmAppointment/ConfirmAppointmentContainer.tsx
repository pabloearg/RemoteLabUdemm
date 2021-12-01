import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  View, Text, Image, ScrollView
} from 'react-native';
import { Card } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { AppointmentRL, Experiment, UserRL, } from '../../API';
import { AppointmentApi } from '../../APIs/appointments';
import ButtonFooter from '../../Components/buttons/ButtonFooter/ButtonFooter';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { updateAppointmentRL } from '../../graphql/mutations';
import { appointmentActions } from '../../store/actions/appointments';
import { AppointmentType } from '../../types/tables';
import { addAppointmentToCalendar, getFormatedDayFromAppointment, getHourFromAppointment } from '../../utils/utils';
import ScreensNames from '../ScreensNames';
import { styles } from './styles';

const ConfirmAppointmentContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const user: UserRL = useSelector((state: any) => state?.user);
  const experiments = useSelector((state: any) => state?.config?.experiments);
  const params: any = useRoute()?.params;

  const appointment: AppointmentType = params?.appointment;
  const experiment: Experiment = experiments[appointment?.experimentId];

  const submit = async () => {
    try {
      setIsLoading(true)
      const updatedAppointment: AppointmentRL = {
        ...appointment,
      };

      delete updatedAppointment.updatedAt;
      delete updatedAppointment.createdAt;
      await AppointmentApi.setAppointmentIsTaken(updatedAppointment);
      const userAppointment = {
        email: user.email,
        day: updatedAppointment.day,
        hour: updatedAppointment.hour,
        uuid: updatedAppointment.uuid,
        firstName: user.firstName,
        lastName: user.lastName,
        experimentId: updatedAppointment.experimentId,
        status: "0"
      }
      await AppointmentApi.createUserAppointment(userAppointment);
      dispatch(appointmentActions.getNewUserAppointments('pabloearg@gmail.com'));
      const added = await addAppointmentToCalendar(userAppointment, experiments[userAppointment.experimentId])
      navigation.navigate(ScreensNames.HOME)

    } catch (error) {
      console.log("submit-error: ", error)
      setIsLoading(false)
      // navigation.navigate(ScreensNames.HOME)
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card containerStyle={{ alignItems: "center", }}>
          {/* <Card.Title>{experiment?.name}</Card.Title> */}

          <TextHeadings
            text="Experimento: "
            color="black"
            type="h2"
            styleText={styles.boldText}
          />
          <TextHeadings
            text={experiment?.name}
            color="black"
            type="h2"
            styleText={styles.normalText}
          />
          <Card.Image source={{ uri: experiment?.iconUrl }} style={styles.icon} resizeMode="contain" />
          {/* <Card.Divider /> */}

          <TextHeadings
            text="Día: "
            color="black"
            type="h2"
            styleText={styles.boldText}
          />
          <TextHeadings
            text={getFormatedDayFromAppointment(appointment)}
            color="black"
            type="h2"
            styleText={styles.normalText}
          />

          <TextHeadings
            text="Hora: "
            color="black"
            type="h2"
            styleText={styles.boldText}
          />
          <TextHeadings
            text={getHourFromAppointment(appointment)}
            color="black"
            type="h2"
            styleText={styles.normalText}
          />
        </Card>
      </ScrollView>
      <ButtonFooter
        text="CONFIRM"
        loading={isLoading}
        onPress={submit}
      />
    </View>
  );
};

export default ConfirmAppointmentContainer;
