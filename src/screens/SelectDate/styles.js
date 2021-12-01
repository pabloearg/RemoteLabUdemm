import { StyleSheet } from 'react-native';

const selectDateStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center',
  },
  iconLeft: {
    width: 42,
    height: 42,
    transform: [{ rotateY: '180deg' }]

  },
  iconRight: {
    width: 42,
    height: 42,

  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 10,
    paddingLeft: 10,
  },
  rowIcon: {
    height: 30,
    width: 30,
    marginRight: 20,
  },
  column: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  normalText: {
    alignSelf: 'center', textAlign: 'center', marginTop: 15
  },
});

export {
  selectDateStyles
};
