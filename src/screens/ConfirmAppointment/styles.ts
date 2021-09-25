import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  icon: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginVertical: 35,
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 28,
  }
});
