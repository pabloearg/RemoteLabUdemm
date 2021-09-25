// @flow
import React from 'react';
import moment from 'moment';
import {
  FlatList, Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import arrowIcon from '../../static/assets/img/arrow_grey.png';
import type {
  DateAppoinment,
  Experiment,
} from '../../types';
import calendarIcon from '../../static/assets/img/calendar.png';
import Separator from '../../Components/Separator/Separator';
import { selectDateStyles } from './styles';
import { DANGER } from '../../styles/colors';
import ScreensNames from '../ScreensNames';
import { getHourFromAppointment } from '../../utils/utils';

const DateRow = ({ appointment }: {appointment: DateAppoinment}) => {
  const { navigate } = useNavigation();
  const goToConfirm = () => {
    navigate(ScreensNames.CONFIRM_APPOINTMENT, { appointment });
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
        text={getHourFromAppointment(appointment)}
        color={DANGER}
        type="h3"
        styleText={[selectDateStyles.column, selectDateStyles.text]}
      />
      <View style={selectDateStyles.column} />
    </TouchableOpacity>
  );
};

export default DateRow;
