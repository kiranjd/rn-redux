import React from 'react';

import { IconButton } from 'react-native-paper';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import { signout } from '../../redux/actions';

const LogoutButton = ({ isAuthed, navigation, signout: _signout }) => {
  if (!isAuthed) navigation.navigate('Auth');
  const signOut = () => _signout();

  const showAlert = () =>
    Alert.alert('Sign out', 'Do you want to sign out?', [
      { text: 'Sign out', onPress: () => signOut() },
      { text: 'Cancel' }
    ]);

  return (
    <IconButton
      icon="logout"
      style={{ marginRight: 10 }}
      size={25}
      onPress={() => showAlert()}
    />
  );
};

const mapStateToProps = state => ({
  isAuthed: state.isAuthed,
  navigation: state.navigation
});

const mapDispatchToProps = { signout };

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
