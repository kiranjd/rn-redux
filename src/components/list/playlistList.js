import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';
import { getPlaylists, setLoading, goToVideos } from '../../redux/actions';
import VideoList from './videoList';

function renderPlaylistItem(item) {
  return (
    <>
      <Text style={styles.playlistHeader}>{item.name}</Text>
      <VideoList list={item.videos} playlistId={item.id} />
    </>
  );
}

const PlaylistList = ({
  isLoading,
  playlists,
  getPlaylists: _getPlaylists,
  setLoading: _setLoading,
  goToVideos: _goToVideos
}) => {
  useEffect(() => {
    async function fetchData() {
      _setLoading();
      await new Promise(resolve => {
        setTimeout(() => resolve(), 800);
      });
      _getPlaylists();
    }
    fetchData();
  }, []);

  if (isLoading) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.playlistWrapper}>
      <FlatList
        data={playlists}
        renderItem={({ item }) => renderPlaylistItem(item, _goToVideos)}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const { isLoading, playlists, navigation } = state;

  return { isLoading, playlists, navigation };
};

const mapDispatchToProps = { getPlaylists, setLoading, goToVideos };

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList);
