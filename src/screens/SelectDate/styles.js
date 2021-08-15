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
    height: 24,
    transform: [{ rotateY: '180deg' }]

  },
  iconRight: {
    width: 42,
    height: 24,

  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
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
});

export {
  selectDateStyles
};
