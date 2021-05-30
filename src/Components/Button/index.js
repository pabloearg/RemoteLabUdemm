// @flow
import React from 'react';
import {
  TouchableOpacity, StyleSheet
} from 'react-native';
import type { ViewStyle, TextStyle } from '../../styles/types';
import TextHeadings from '../TextHeadings/TextHeadings';

type Props = {
  backgroundColor?: string,
  style?: ViewStyle,
  onPress: () => any,
  children: any,
  textStyle?: TextStyle,
  text?: string
}

const Button = (props: Props) => {
  const { backgroundColor, style, } = props;
  const { textStyle, ...rest } = props;
  Button.defaultProps = {
    backgroundColor: undefined,
    textStyle: undefined,
    style: undefined,
    text: undefined,
  };
  return (
    <TouchableOpacity
      /* eslint-disable react/jsx-props-no-spreading */
      {...rest}
      style={[{ backgroundColor }, styles.Button, style]}
      onPress={props.onPress}
    >
      <TextHeadings
        type="normal"
        styleText={[styles.Text, textStyle,]}
      >
        {props.text ?? props.children}

      </TextHeadings>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    alignItems: 'center',
    borderRadius: 5
  },
  Text: {
    fontSize: 12
  }
});
