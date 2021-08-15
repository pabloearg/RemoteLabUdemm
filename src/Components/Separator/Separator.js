// @flow
import React from 'react';
import { View } from 'react-native';
import { LIGHT_GRAY } from '../../styles/colors';

const Separator = ({ style, full }) => (
  <View
    style={[
      {
        borderBottomColor: LIGHT_GRAY,
        borderBottomWidth: 1,
        marginHorizontal: 15,
        marginVertical: 10
      },
      style,
      full ? {
        width: '100%',
        alignSelf: 'center'
      } : undefined
    ]}
  />
);

export default Separator;
