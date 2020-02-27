import React, { forwardRef } from 'react';
import { TextInput } from 'react-native-paper';
import { wp } from '../../utils';

export default forwardRef((props, ref) => {
  return (
    <TextInput ref={ref} {...props} style={{ width: wp(80), height: 60 }} />
  );
});
