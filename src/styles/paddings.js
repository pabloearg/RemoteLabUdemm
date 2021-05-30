import { Dimensions, StyleSheet, Platform } from 'react-native';
import * as Constants from './constants';

const { width } = Dimensions.get('window');

export const LOW_PADDING = 28;
export const MEDIUM_PADDING = width * Constants.MEDIUM_SIZE_PERCENTAGE;
export const HEIGH_PADDING = width * Constants.HIGH_SIZE_PERCENTAGE;

export const paddingStyles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
