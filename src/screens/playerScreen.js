import React from 'react';
import { SafeAreaView } from 'react-native';

import { connect } from 'react-redux';

import { Player, VideoInfo, VideoComments } from '../components/player';

const PlayerScreen = ({ nowPlaying }) => (
  <SafeAreaView>
    <Player nowPlaying={nowPlaying} />
    <VideoInfo nowPlaying={nowPlaying} />
    <VideoComments />
  </SafeAreaView>
);

const mapStateToProps = state => {
  const { nowPlaying } = state;

  return { nowPlaying };
};

export default connect(mapStateToProps)(PlayerScreen);
