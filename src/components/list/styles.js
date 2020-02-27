import { StyleSheet } from 'react-native';
import {
  colors,
  BORDER_RADIUS,
  commonHeaderStyle
} from '../../config/constants';
import { wp, hp } from '../../utils';

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 1,
    height: 6
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84
};

export default StyleSheet.create({
  playlistWrapper: {
    flex: 1
  },
  playlistItem: {
    backgroundColor: colors.secondary,
    width: wp(96),
    height: hp(5),
    marginVertical: 10,
    borderRadius: BORDER_RADIUS,
    ...shadow
  },
  videoListWrapper: {
    marginTop: 5,
    width: wp(100)
  },
  videoThumbnail: {
    marginBottom: 18,
    width: wp(60),
    marginHorizontal: wp(2),
    ...shadow
  },
  playlistHeader: commonHeaderStyle
});
