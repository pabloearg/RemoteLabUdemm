// @flow
import { Platform, StyleSheet } from 'react-native';
import { WHITE } from './colors';

export type HEADING_TYPES = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8" | "item1" | "item2" | "body1" | "overline" | "heavy40" | "caption" | "normal"

const textStyles = StyleSheet.create({
  fontFamily: {
    fontFamily: Platform.OS === 'android' ? 'avenirgoalsetter' : 'avenir',
    color: WHITE,
  },
  normal: {
    fontSize: 12,
  },
  h1: {
    fontWeight: '900',
    fontSize: 32,
    lineHeight: 44,
  },
  h5: {
    fontWeight: '900',
    fontSize: 18,
    lineHeight: 25,
  },
  h6: {
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 19,
  },
  h8: {
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 16,
  },
  item1: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19,
  },
  item2: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
  },
  body1: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
  },
  body2: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },
  title1: {
    fontWeight: '900',
    fontSize: 18,
    lineHeight: 24.59,
  },
  ag: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13.66,
  },
  overline: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13.66,
  },
  heavy40: {
    fontWeight: '800',
    fontSize: 40,
    lineHeight: 54.64,
  },
  caption: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  }
});

export default textStyles;
