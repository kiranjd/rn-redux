import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

export default () => (
  <View style={styles.logoContainer}>
    <Image
      source={require('./images/logo.png')}
      style={styles.logo}
      resizeMode="contain"
    />
  </View>
);
