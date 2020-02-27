import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import Video from 'react-native-video';

import { wp, hp } from '../../utils';

export default ({ nowPlaying }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { sources } = nowPlaying;
  return (
    <>
      <Video
        source={{ uri: sources[0] }}
        style={{ width: wp(100), height: hp(26) }}
        controls
        fullscreenAutorotate
        onLoad={() => setIsVideoLoaded(true)}
        poster="https://picsum.photos/550"
        posterResizeMode="cover"
      />
      <ActivityIndicator
        animating={!isVideoLoaded}
        size="large"
        style={{ position: 'absolute', alignSelf: 'center', top: hp(11) }}
      />
    </>
  );
};
