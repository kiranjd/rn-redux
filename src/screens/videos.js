import React from 'react';
import { View, Text } from 'react-native';

import { MainContainer } from '../components/containers';
import VideoList from '../components/list/videoList';

const Videos = () => {
  return (
    <MainContainer>
      <VideoList />
    </MainContainer>
  );
};

export default Videos;
