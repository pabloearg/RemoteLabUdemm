// @flow
import React from 'react';
import { Text } from 'react-native';
import type { TextStyle } from 'react-native';
import { TextStyles } from '../../styles';
import type { HEADING_TYPES } from '../../styles/text';
/* eslint-disable react/jsx-props-no-spreading */
type Props = {
  type?: HEADING_TYPES,
  children?: any,
  color?: "black" | "white" | undefined,
  styleText?: TextStyle,
  text?: string,
}

const getStyle = (type: HEADING_TYPES) => TextStyles[type] ?? TextStyles.h4;

const TextHeadings = ({
  type,
  children,
  styleText,
  color,
  text,
  ...rest
}: Props) => (
  <Text
    {...rest}
    style={[
      TextStyles.fontFamily,
      getStyle(type),
      styleText,
      color && { color }]}
  >
    {text ?? children}

  </Text>
);

TextHeadings.defaultProps = {
  color: undefined,
  type: 'h4',
  text: undefined,
  children: undefined,
  styleText: undefined,
};

export default TextHeadings;
