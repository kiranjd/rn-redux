import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';

export default ({ children }) => (
  <SafeAreaView style={styles.mainContainer}>{children}</SafeAreaView>
);
