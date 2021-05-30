import { Platform, StyleSheet } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import { BLUE_HEADER, WHITE } from './colors';

export const LOW_HEADER_HEIGHT = Platform.select({
  ios: {
    height: hasNotch() ? 135 + 10 : 112.5 + 20,
  },
  android: {
    height: 112.5
  },
}).height;

export const commonHeader = StyleSheet.create({
  heightHeader: {
    height: LOW_HEADER_HEIGHT
  }
});

export const multilineHeader = StyleSheet.create({

});

export const colorHeaderStyle = { headerTintColor: WHITE, headerStyle: { backgroundColor: BLUE_HEADER } };
