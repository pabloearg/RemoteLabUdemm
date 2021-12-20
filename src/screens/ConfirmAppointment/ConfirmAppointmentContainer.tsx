import { useNavigation, useRoute } from '@react-navigation/core';
import { find } from 'lodash';
import React, { useState } from 'react';
import {
  View, Text, Image, ScrollView, Platform
} from 'react-native';
import { Card } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { AppointmentRL, Experiment, UserRL, } from '../../API';
import { AppointmentApi } from '../../APIs/appointments';
import ButtonFooter from '../../Components/buttons/ButtonFooter/ButtonFooter';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { updateAppointmentRL } from '../../graphql/mutations';
import { Images } from '../../static/assets/Images';
import { appointmentActions } from '../../store/actions/appointments';
import { AppointmentType } from '../../types/tables';
import { addAppointmentToCalendar, getFormatedDayFromAppointment, getHourFromAppointment } from '../../utils/utils';
import ScreensNames from '../ScreensNames';
import { styles } from './styles';

const ConfirmAppointmentContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const [itsTaken, setItsTaken] = useState(false)
  const user: UserRL = useSelector((state: any) => state?.user?.data);
  const experiments = useSelector((state: any) => state?.config?.experiments);
  const params: any = useRoute()?.params;

  const appointment: AppointmentType = params?.appointment;
  const exactDay: any = params?.exactDay;
  const experiment: Experiment = experiments[appointment?.experimentId];

  const submit = async () => {
    try {
      setIsLoading(true)
      const updatedAppointment: AppointmentRL = {
        ...appointment,
      };

      delete updatedAppointment.updatedAt;
      delete updatedAppointment.createdAt;
      try {
        const itsFree = await checkIfItsFree()
        if (!itsFree) {
          setItsTaken(true)
          setIsLoading(false)
          return
        }

      } catch (error) {

      }
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
      dispatch(appointmentActions.getUserAppointments(user.email));
      if (Platform.OS === "android") {
        const added = await addAppointmentToCalendar(userAppointment, experiments[userAppointment.experimentId])
      }
      navigation.navigate(ScreensNames.HOME)

    } catch (error) {
      console.log("submit-error: ", error)
      setIsLoading(false)
      // navigation.navigate(ScreensNames.HOME)
    }
  };

  const checkIfItsFree = async () => {
    const response: any = await AppointmentApi.getAppointmentsByExperimentIdAndDay(exactDay, experiment?.uuid);
    let appointmentsItems = response?.data?.appointmentByDayAndExperimentUserless?.items;
    const exist = find(appointmentsItems, (item => appointment.uuid === item.uuid))
    return exist !== undefined
  }

  if (itsTaken) {
    return (<View style={styles.container}>
      <TextHeadings
        text="El turno que estas queriendo tomar ya no esta disponible"
        color="black"
        type="h2"
        styleText={styles.noAppointmentText}
      />
    </View>)
  }

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
          <Card.Image source={Images.experiments[experiment?.uuid]} style={styles.icon} resizeMode="contain" />
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
        text="CONFIRMAR"
        loading={isLoading}
        onPress={submit}
      />
    </View>
  );
};

export default ConfirmAppointmentContainer;
