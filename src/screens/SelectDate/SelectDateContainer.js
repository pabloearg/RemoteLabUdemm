// @flow
import React from 'react';
import moment from 'moment';
import {
  FlatList, Image, StyleSheet, Text, View
} from 'react-native';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import arrowIcon from '../../static/assets/img/arrow_rigth.png';
import type {
  DateAppoinment,
  Experiment,
} from '../../types';
import calendarIcon from '../../static/assets/img/calendar.png';
import Separator from '../../Components/Separator/Separator';
import DateRow from './DateRow';
import { selectDateStyles } from './styles';
import 'moment/locale/es-mx';

moment.locale('es-mx');
const getAppointments = (): Array<DateAppoinment> => {
  const array: Array<DateAppoinment> = [];
  for (let index = 0; index < 40; index++) {
    const firstAppointmentIn = moment().set('minute', 0).set('hour', 9).add(index * 15, 'minute');
    array.push({
      id: `${index}`,
      hours: firstAppointmentIn.format('h:mm')
    });
  }
  return array;
};
const date = getAppointments();

const SelectDateContainer = () => {
  const renderItem = ({ item }: {item: DateAppoinment}) => (
    <DateRow
      hours={item.hours}
    />
  );
  return (
    <View style={selectDateStyles.container}>
      <View style={selectDateStyles.headerContainer}>
        <Image
          source={arrowIcon}
          style={selectDateStyles.iconLeft}
        />
        <TextHeadings
          text={moment().format('DD MMMM')}
          color="black"
          type="h1"
        />
        <Image
          source={arrowIcon}
          style={selectDateStyles.iconRight}
        />
      </View>
      <FlatList
        renderItem={renderItem}
        data={date}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default SelectDateContainer;
