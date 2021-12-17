// @flow
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import TextHeadings from '../../../Components/TextHeadings/TextHeadings';
import { WHITE } from '../../../styles/colors';

import ScreensNames from '../../ScreensNames';
import { SelectExpermientStyles } from '../styles';
import type {
  ExperimentsRL
} from '../../../types/graphql';
import { Images } from '../../../static/assets/Images';

type Props = {
  experiment: ExperimentsRL,
  onPress: ()=>void
}
const ExperimentRow = ({
  experiment,
  onPress
}: Props) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={SelectExpermientStyles.rowContainer}
      onPress={() => navigate(ScreensNames.SELECT_DATE, { experiment })}
    >
      <Image
        source={Images.experiments[experiment?.uuid]}
        style={SelectExpermientStyles.icon}
      />
      <TextHeadings
        text={experiment.name}
        type="item1"
        color="black"
      />
    </TouchableOpacity>
  );
};

export default ExperimentRow;
