// @flow
import { Platform, StyleSheet } from 'react-native';
import { WHITE } from './colors';

export type HEADING_TYPES = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8" | "item1" | "item2" | "body1" | "body2" | "overline" | "heavy40" | "caption" | "dateButon" | "normal" | "instrumentAmount" | "bold"

export const getFontWeight = (weight: string) => {
  if (Platform.OS === 'ios') {
    return weight;
  }
  if (parseInt(weight, 10) <= 500) {
    return 'normal';
  }
  return 'bold';
};
const textStyles = StyleSheet.create({
  fontFamily: {
    fontFamily: Platform.OS === 'android' ? 'avenirgoalsetter' : 'avenir',
    color: WHITE,
  },
  h1: {
    fontWeight: getFontWeight('900'),
    fontSize: 32,
    lineHeight: 44,
  },
  h2: {
    fontWeight: getFontWeight('900'),
    fontSize: 24,
    lineHeight: 33,
  },
  h3: {
    fontWeight: getFontWeight('900'),
    fontSize: 20,
    lineHeight: 27.32,
  },
  h5: {
    fontWeight: getFontWeight('800'),
    fontSize: 18,
    lineHeight: 25,
  },
  h6: {
    fontWeight: getFontWeight('900'),
    fontSize: 14,
    lineHeight: 19,
  },
  h7: {
    fontWeight: getFontWeight('900'),
    fontSize: 12,
    lineHeight: 16,
  },
  h8: {
    fontWeight: getFontWeight('800'),
    fontSize: 12,
    lineHeight: 16,
  },
  item1: {
    fontWeight: getFontWeight('500'),
    fontSize: 14,
    lineHeight: 19,
  },
  item2: {
    fontWeight: getFontWeight('500'),
    fontSize: 12,
    lineHeight: 16,
  },
  body1: {
    fontWeight: getFontWeight('400'),
    fontSize: 16,
    lineHeight: 22,
  },
  body2: {
    fontWeight: getFontWeight('400'),
    fontSize: 14,
    lineHeight: 20,
  },
  title1: {
    fontWeight: getFontWeight('900'),
    fontSize: 18,
    lineHeight: 24.59,
  },
  ag: {
    fontWeight: getFontWeight('400'),
    fontSize: 10,
    lineHeight: 13.66,
  },
  overline: {
    fontWeight: getFontWeight('400'),
    fontSize: 10,
    lineHeight: 13.66,
  },
  heavy40: {
    fontWeight: getFontWeight('800'),
    fontSize: 40,
    lineHeight: 54.64,
  },
  caption: {
    fontWeight: getFontWeight('400'),
    fontSize: 12,
    lineHeight: 20,
  },
  dateButon: {
    fontWeight: getFontWeight('800'),
  },
  normal: {
    fontSize: 12,
  },
  instrumentAmount: {
    fontWeight: getFontWeight('800'),
    fontSize: 30,
    lineHeight: 40,
  },
  bold: {
    fontWeight: 'bold',
  }
});

export default textStyles;
