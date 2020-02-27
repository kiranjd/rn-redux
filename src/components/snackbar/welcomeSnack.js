import React, { useState } from 'react';

import { Snackbar } from 'react-native-paper';
import { hp } from '../../utils';

export default ({ name, ...rest }) => {
  const [showSnack, setShowSnack] = useState(true);
  return (
    <Snackbar
      {...rest}
      style={{ marginBottom: hp(8) }}
      duration={2500}
      visible={showSnack}
      onDismiss={() => setShowSnack(false)}
    >
      Welcome back, {name}
    </Snackbar>
  );
};
