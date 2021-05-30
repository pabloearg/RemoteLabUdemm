// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from '../../styles/types';
import Button from '../Button';

type Props = {
  backgroundColor?: string,
  style?: ViewStyle,
  onPress: ()=>any,
  children: any,
  buttonTextStyle: TextStyle,
  text?: string,
}

const ButtonLarge = (props: Props) => {
  const {
    backgroundColor,
    style,
    onPress,
    children,
    buttonTextStyle,
    text,
    ...other
  } = props;

  ButtonLarge.defaultProps = {
    backgroundColor: undefined,
    style: undefined,
    text: undefined,
  };

  return (
    <Button
      onPress={onPress}
      backgroundColor={backgroundColor}
      style={[styles.Button, props.style]}
      textStyle={buttonTextStyle}
      {...other}
    >
      {text ?? props.children}
    </Button>
  );
};

const styles = StyleSheet.create({
  Button: {
    padding: 16
  }
});

export default ButtonLarge;
