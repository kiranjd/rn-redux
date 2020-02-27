import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/login';
import Home from '../screens/home';
import LogoutButton from '../components/button/logoutButton';
import Videos from '../screens/videos';
import PlayerScreen from '../screens/playerScreen';

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Video Playlists',
      headerRight: () => <LogoutButton />
    }
  },
  Videos: {
    screen: Videos,
    navigationOptions: {
      title: 'Videos'
    }
  },
  PlayerScreen: {
    screen: PlayerScreen,
    navigationOptions: {
      title: 'Now Playing'
    }
  }
});

const AppNavigator = createSwitchNavigator(
  {
    Auth: Login,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
);

export default createAppContainer(AppNavigator);
