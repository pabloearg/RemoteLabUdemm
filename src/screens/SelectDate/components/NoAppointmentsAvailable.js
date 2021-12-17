import React from 'react';
import { View, Text } from 'react-native';
import TextHeadings from '../../../Components/TextHeadings/TextHeadings';

const NoAppointmentsAvailable = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <TextHeadings
      text="No hay turnos disponibles"
      color='black'
    />
  </View>
);

export default NoAppointmentsAvailable;
