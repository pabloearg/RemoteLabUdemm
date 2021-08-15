// @flow
import React from 'react';
import moment from 'moment';
import {
  FlatList, Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import arrowIcon from '../../static/assets/img/arrow_grey.png';
import type {
  DateAppoinment,
  Experiment,
} from '../../types';
import calendarIcon from '../../static/assets/img/calendar.png';
import Separator from '../../Components/Separator/Separator';
import { selectDateStyles } from './styles';

const DateRow = ({ hours }) => {
  const goToConfirm = () => {

  };
  return (
    <TouchableOpacity
      onPress={goToConfirm}
      style={selectDateStyles.rowContainer}
    >
      <View style={selectDateStyles.column}>
        <Image
          source={calendarIcon}
          style={selectDateStyles.rowIcon}
        />
      </View>
      <TextHeadings
        text={hours}
        color="black"
        type="body1"
        styleText={[selectDateStyles.column, selectDateStyles.text]}
      />
      <View style={selectDateStyles.column} />
    </TouchableOpacity>
  );
};

export default DateRow;
