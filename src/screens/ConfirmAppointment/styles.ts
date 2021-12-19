import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 28,
  },
  normalText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: "normal"
  },
  boldText: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 15,
  },
  noAppointmentText: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  icon: {
    height: 120,
    alignSelf: 'center'
  },
});
