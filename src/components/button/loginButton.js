import React from 'react';
import { View } from 'react-native';

import { Button } from 'react-native-paper';

import styles from './styles';

export default props => (
  <View style={styles.buttonWrapper}>
    <Button icon="arrow-right" {...props}>
      LOGIN
    </Button>
  </View>
);
