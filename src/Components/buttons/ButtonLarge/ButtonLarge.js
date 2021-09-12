// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import type {
  ViewStyle,
  TextStyle,
} from '../../../styles/types';
import Button from '../Button';
import { styles } from './styles';

type Props = {
  style?: ViewStyle,
  buttonTextStyle?: TextStyle,
  onPress: ()=>any,
  text?: string,
  btnAccessibilityLabel: string,
  disabled: boolean,
}

const ButtonLarge = (props: Props) => {
  const {
    backgroundColor,
    style,
    buttonTextStyle,
    disabled,
    onPress,
    accessibilityLabel,
    text,
    ...other
  } = props;

  return (
    <Button
      onPress={onPress}
      backgroundColor={disabled ? styles.disabled.backgroundColor : styles.normal.backgroundColor}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      style={[styles.Button, style]}
      textStyle={[styles.buttonTextStyle, buttonTextStyle]}
      text={text}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  );
};

ButtonLarge.defaultProps = {
  style: undefined,
  buttonTextStyle: undefined,
  text: undefined,
};

export default ButtonLarge;
