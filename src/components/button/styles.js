import { StyleSheet } from 'react-native';

const BUTTON_WIDTH = 100;

export default StyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#fff',
    borderRadius: BUTTON_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: BUTTON_WIDTH,
    margin: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  }
});
