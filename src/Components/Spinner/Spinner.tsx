import React from 'react';
import { ActivityIndicator } from 'react-native';
import type {
  ViewStyle,
} from '../../styles/types';

type Props = {
  color?: string,
  size?: number | "small" | "large",
  style?: ViewStyle,
}
export default function Spinner({
  color,
  size,
  style,
  ...rest
}: Props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ActivityIndicator color={color} size={size} {...rest} style={style} />
  );
}

Spinner.defaultProps = {
  color: '#999999',
  size: 'small',
  style: undefined,
};
