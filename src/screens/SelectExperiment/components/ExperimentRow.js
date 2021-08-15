// @flow
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import TextHeadings from '../../../Components/TextHeadings/TextHeadings';
import { WHITE } from '../../../styles/colors';
import type {
  Experiment,
} from '../../../types';
import ScreensNames from '../../ScreensNames';
import { SelectExpermientStyles } from '../styles';

type Props = Experiment
const ExperimentRow = ({
  icon,
  id,
  title,
  onPress
}: Props) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={SelectExpermientStyles.rowContainer}
      onPress={() => navigate(ScreensNames.SELECT_DATE, {
        id,
        title,
      })}
    >
      <Image
        source={icon}
        style={SelectExpermientStyles.icon}
      />
      <TextHeadings
        text={title}
        type="item1"
        color="black"
      />
    </TouchableOpacity>
  );
};

export default ExperimentRow;
