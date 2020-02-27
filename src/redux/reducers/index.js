import {
  VALIDATE_USER,
  LOADING,
  SIGNOUT,
  GET_PLAYLISTS,
  GO_TO_VIDEOS,
  ADD_TO_NOW_PLAYING,
  ADD_COMMENT
} from '../constants/action-types';
import data from '../../config/data.json';
import { saveToAsync, clearAsync } from '../../utils';

const { users, playlists } = data;

const initialState = {
  isAuthed: false,
  isLoading: false,
  comments: [],
  error: ''
};

function rootReducer(state = initialState, action) {
  console.log('TCL: rootReducer -> action', action);
  console.log('new state', state.comments);

  if (action.type === ADD_COMMENT) {
    const { comments, user } = state;
    const { videoId, comment } = action.payload;

    comments.push({
      id: Math.random().toString(),
      user: user.name,
      videoId,
      comment
    });
    return { ...state, comments };
  }

  if (action.type === ADD_TO_NOW_PLAYING) {
    state.navigation.navigate('PlayerScreen');
    const { payload, playlistId } = action;
    return { ...state, nowPlaying: { ...payload, playlistId } };
  }

  if (action.type === GO_TO_VIDEOS) {
    state.navigation.navigate('Videos');
    return { ...state, currentPlaylist: action.payload };
  }

  if (action.type === GET_PLAYLISTS) {
    return { ...state, playlists, isLoading: false };
  }

  if (action.type === SIGNOUT) {
    clearAsync();
    return { ...state, isAuthed: false, user: {} };
  }

  if (action.type === LOADING) return { ...state, isLoading: true };

  if (action.type === VALIDATE_USER) {
    const { username, password, navigation } = action.payload;

    const user = users.filter(
      ele => ele.username === username && ele.password === password
    )[0];

    if (!!user) {
      saveToAsync(user);
      return { ...state, isLoading: false, isAuthed: true, user, navigation };
    }
    return {
      ...state,
      isLoading: false,
      error: 'Username or password is incorrect'
    };
  }
  return state;
}

export default rootReducer;
