import { useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  View, Text, Image, ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';
import { Appointment, Experiment, User } from '../../API';
import { AppointmentApi } from '../../APIs/appointments';
import ButtonFooter from '../../Components/buttons/ButtonFooter/ButtonFooter';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { AppointmentType } from '../../types/tables';
import { getFormatedDayFromAppointment, getHourFromAppointment } from '../../utils/utils';
import { styles } from './styles';

const ConfirmAppointmentContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const user: User = useSelector((state: any) => state?.user);
  const experiments = useSelector((state: any) => state?.config?.experiments);
  const { params }: { params: any } = useRoute();

  const appointment: AppointmentType = params?.appointment;
  const experiment: Experiment = experiments[appointment?.experimentId];

  const submit = () => {
    const updatedAppointment: Appointment = {
      ...appointment,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    delete updatedAppointment.updatedAt;
    delete updatedAppointment.createdAt;
    AppointmentApi.setAppointment(updatedAppointment);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: experiment.iconUrl }} style={styles.icon} />
      <ScrollView>
        <View style={styles.row}>
          <TextHeadings
            text="Experimento: "
            color="black"
            type="h2"
          />
          <TextHeadings
            text={experiment?.name}
            color="black"
            type="h2"
            styleText={{ fontWeight: 'normal', }}
          />
        </View>
        <View style={styles.row}>
          <TextHeadings
            text="Día: "
            color="black"
            type="h2"
          />
          <TextHeadings
            text={getFormatedDayFromAppointment(appointment)}
            color="black"
            type="h2"
            styleText={{ fontWeight: 'normal', }}
          />
        </View>
        <View style={styles.row}>
          <TextHeadings
            text="Hora: "
            color="black"
            type="h2"
          />
          <TextHeadings
            text={getHourFromAppointment(appointment)}
            color="black"
            type="h2"
            styleText={{ fontWeight: 'normal', }}
          />
        </View>
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
