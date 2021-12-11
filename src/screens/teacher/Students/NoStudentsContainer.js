import React from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import TextHeadings from '../../../Components/TextHeadings/TextHeadings';
import { getString, translateEnum } from '../../../static/locale';
import { Colors } from '../../../styles';

import experiment1 from '../../../static/assets/img/experiment4.png';
import ButtonLarge from '../../../Components/buttons/ButtonLarge/ButtonLarge';

const NoAppointmentsContainer = () => (
  <View style={styles.container}>
    <Image source={experiment1} style={{ height: 140, aspectRatio: 1.068, marginBottom: 20 }} />
    <TextHeadings
      text={"No tenes ningun alumno en este curso en este momento"}
      type="h5"
      color={Colors.GRAY_DARK}
      styleText={{ marginBottom: 20, textAlign:"center" }}
    />
    <TextHeadings
      text={"Si crees que existe algun inconveniente, comunicate con soporte tecnico"}
      type="h4"
      color={Colors.GRAY_DARK}
      styleText={{textAlign:"center"}}
    />
  </View>
);

export default NoAppointmentsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    textAlign:"center"
  }
});
