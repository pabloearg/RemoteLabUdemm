import React, { useState, useEffect } from 'react';
import {
  StyleSheet, TouchableOpacity,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import 'react-native-get-random-values';

import { PricingCard, Card, Text } from 'react-native-elements';
import moment from 'moment';
import NoAppointmentsContainer from './NoAppointmentsContainer';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import { configActions } from '../../store/actions/config';
import { userActions } from '../../store/actions/user';
import { appointmentActions } from '../../store/actions/appointments';
import { BLUE } from '../../styles/colors';
import { Experiment } from '../../types';

const initialState = { name: '', description: '' };

const NextAppointments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const experiments = useSelector((state) => state?.config?.experiments);
  const dispatch = useDispatch();
  const experiment: Experiment = experiments[1];
  console.log('experiment', experiment);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    dispatch(userActions.getUser());
    dispatch(appointmentActions.getNewUserAppointments('pabloearg@gmail.com'));
    dispatch(configActions.getConfig());
  }, []);

  // if (isLoading) {
  //   return (<FullScreenLoader />);
  // }
  if (false) { return (<NoAppointmentsContainer />); }
  return (
    <>
      {/* <PricingCard
        color={BLUE}
        title={moment().toLocaleString()}
        price="Caida Libre"
        info={[moment().toLocaleString(), 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      /> */}
      <TouchableOpacity onPress={() => { }}>
        <Card>
          <Card.Title>Caida Libre</Card.Title>
          <Card.Image source={{ uri: experiment?.iconUrl }} style={styles.icon} resizeMode="contain" />
          {/* <Card.Divider /> */}
          <Text style={{
            padding: 15, width: '100%', alignSelf: 'center', textAlign: 'center'
          }}
          >
            {moment().toLocaleString()}
          </Text>
        </Card>
      </TouchableOpacity>
    </>
  );
};

export default NextAppointments;

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
    alignSelf: 'center'
  },
});
