import {
  VALIDATE_USER,
  LOADING,
  SIGNOUT,
  GET_PLAYLISTS,
  GO_TO_VIDEOS,
  ADD_TO_NOW_PLAYING,
  ADD_COMMENT
} from '../constants/action-types';

function validateUser(payload) {
  return { type: VALIDATE_USER, payload };
}

function setLoading() {
  return { type: LOADING };
}

function signout() {
  return { type: SIGNOUT };
}

function getPlaylists() {
  return { type: GET_PLAYLISTS };
}

function goToVideos(payload) {
  return { type: GO_TO_VIDEOS, payload };
}

function addToNowPlaying(payload, playlistId) {
  return { type: ADD_TO_NOW_PLAYING, payload, playlistId };
}

function addComment(payload) {
  return { type: ADD_COMMENT, payload };
}

export {
  validateUser,
  setLoading,
  signout,
  getPlaylists,
  goToVideos,
  addToNowPlaying,
  addComment
};
