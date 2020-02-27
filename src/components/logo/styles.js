import { StyleSheet } from 'react-native';

import { wp, hp } from '../../utils';
import { BORDER_RADIUS } from '../../config/constants';

export default StyleSheet.create({
  logo: {
    width: wp(60)
  },
  logoContainer: {
    width: wp(100),
    height: hp(50),
    // backgroundColor: '#1d1d1d',
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
