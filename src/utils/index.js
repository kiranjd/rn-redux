import { Dimensions, Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const { width, height } = Dimensions.get('screen');

/**
 * Returns in pixels for percentage of width
 */
function wp(percent) {
  return (percent * width) / 100;
}
/**
 * Returns in pixels for percentage of height
 */
function hp(percent) {
  return (percent * height) / 100;
}

function saveToAsync(user) {
  AsyncStorage.setItem('user', user.toString()).then(res =>
    console.log('user saved in Async')
  );
}

function clearAsync() {
  AsyncStorage.removeItem('user').then(res =>
    Alert.alert('You have been signed out')
  );
}

export { wp, hp, saveToAsync, clearAsync };
