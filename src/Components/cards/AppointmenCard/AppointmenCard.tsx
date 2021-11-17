import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type AppointmenCardProps = {
  title: string
}
const AppointmenCard: FC<AppointmenCardProps> = ({
  title
}) => {
  const a = '';
  return (
    <TouchableOpacity>
      <Text />
    </TouchableOpacity>
  );
};

export default AppointmenCard;
