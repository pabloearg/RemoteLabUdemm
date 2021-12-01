import { StyleSheet } from 'react-native';
import {
  BLACK,
  ORANGE,
  DISABLED_GREY,
  BLUE_HEADER,
} from '../../../styles/colors';

export const styles = StyleSheet.create({
  Button: {
    height: 50,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonTextStyle: {
    fontWeight: '900',
    fontSize: 14
  },
  disabled: {
    backgroundColor: DISABLED_GREY,

  },
  normal: {
    backgroundColor: BLUE_HEADER,
  }
});
