import React from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { getString, translateEnum } from '../../static/locale';
import { Colors } from '../../styles';

import experiment1 from '../../static/assets/img/experiment1.png';

const NoPreviousAppointmentsContainer = () => (
  <View style={styles.container}>
    <Image source={experiment1} style={{ height: 140, aspectRatio: 1, marginBottom: 20 }} />
    <TextHeadings
      text={getString(translateEnum.INTRO_APPOINTMENT_LAST_TITLE)}
      type="h5"
      color={Colors.GRAY_DARK}
      styleText={{ marginBottom: 20 }}
    />
    <TextHeadings
      text={getString(translateEnum.INTRO_APPOINTMENT_LAST_DESCRIPTION)}
      type="h4"
      color={Colors.GRAY_DARK}
    />
  </View>
);

export default NoPreviousAppointmentsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
