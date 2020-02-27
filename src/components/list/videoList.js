import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import { Card, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';

import styles from './styles';
import { addToNowPlaying } from '../../redux/actions';

function renderVideoThumbnail(item, _addToNowPlaying, playlistId) {
  const { subtitle, title } = item;
  return (
    <Card style={styles.videoThumbnail}>
      <TouchableOpacity onPress={() => _addToNowPlaying(item, playlistId)}>
        <Card.Title title={title} subtitle={subtitle} />
        <Card.Cover
          source={{ uri: 'https://picsum.photos/550' }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </Card>
  );
}

const VideoList = ({
  list: videos,
  addToNowPlaying: _addToNowPlaying,
  playlistId
}) => {
  return (
    <View style={styles.videoListWrapper}>
      <FlatList
        data={videos}
        renderItem={({ item }) =>
          renderVideoThumbnail(item, _addToNowPlaying, playlistId)
        }
        horizontal
      />
    </View>
  );
};

const mapDispatchToProps = { addToNowPlaying };

export default connect(null, mapDispatchToProps)(VideoList);
