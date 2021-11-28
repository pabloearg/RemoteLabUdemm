import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { PricingCard, Card, Text } from 'react-native-elements';
import moment from 'moment';
import ButtonFooter from '../../Components/buttons/ButtonFooter/ButtonFooter';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { BLACK } from '../../styles/colors';

const AppointmentDetail = () => {
  const navigation = useNavigation();
  const routeinfo = useRoute();
  const experiment = routeinfo.params?.experiment;
  const time = routeinfo.params?.time;
  console.log('experiment: ', experiment);
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
          text={time.format('DD/MM/YYYY')}
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
          text={time.format('hh:mm')}
          color="black"
          styleText={styles.normalText}
        />
        <TextHeadings
          type="h3"
          text="Pausible de penalizacion?"
          color="black"
          styleText={styles.titleText}
        />
        <TextHeadings
          type="h4"
          text="NO"
          color="black"
          styleText={styles.normalText}
        />
      </Card>
      <View style={{ flex: 1 }} />
      <ButtonFooter
        onPress={() => { }}
        text="CANCELAR TURNO"
        isInvestmentButton
      />
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
