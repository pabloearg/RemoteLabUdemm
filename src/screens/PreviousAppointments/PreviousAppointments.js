import React, { useEffect, useState } from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { getString, translateEnum } from '../../static/locale';
import { Colors } from '../../styles';
import experiment1 from '../../static/assets/img/experiment1.png';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import NoPreviousAppointmentsContainer from './NoPreviousAppointmentsContainer';

const PreviousAppointments = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (<FullScreenLoader />);
  }
  return (<NoPreviousAppointmentsContainer />);
};

export default PreviousAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
