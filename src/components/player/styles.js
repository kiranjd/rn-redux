import { StyleSheet } from 'react-native';

import { commonHeaderStyle } from '../../config/constants';
import { wp, hp } from '../../utils';

export default StyleSheet.create({
  commentsHeader: commonHeaderStyle,
  addCommentWrapper: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: wp(100),
    height: hp(8),
    paddingLeft: 5
  }
});
