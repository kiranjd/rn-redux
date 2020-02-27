import React, { useRef, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';

import Input from './input';
import styles from './styles';
import { LoginButton } from '../button';
import { validateUser, setLoading } from '../../redux/actions';

const LoginForm = ({
  isLoading,
  validateUser: _validateUser,
  setLoading: _setLoading,
  error: loginError,
  isAuthed,
  navigation
}) => {
  if (isAuthed) navigation.navigate('App');
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [error, setError] = useState('');

  const isFieldsEmpty = username === '' || password === '';
  const isValidPassword = password.length < 6;

  useEffect(() => {
    if (isFieldsEmpty && passwordTouched && usernameTouched) {
      setError('Username or password cannot be empty');
      return;
    }

    if (isValidPassword && passwordTouched) {
      setError('Password should have minimum of 6-charecters');
      return;
    }
    setError('');
  }, [password, username]);

  const submitForm = async () => {
    if (error === '' && !isFieldsEmpty) {
      _setLoading();
      await new Promise(resolve => {
        setTimeout(() => resolve(), 500);
      });
      _validateUser({ username, password, navigation });
    }
  };

  return (
    <View style={styles.formWrapper}>
      <Input
        ref={usernameRef}
        label="Username"
        autoCompleteType="username"
        autoCapitalize="none"
        maxLength={16}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        blurOnSubmit={false}
        onChangeText={text => setUsername(text)}
        value={username}
        onFocus={() => setUsernameTouched(true)}
      />
      <Input
        ref={passwordRef}
        label="Password"
        autoCompleteType="password"
        secureTextEntry
        maxLength={32}
        minLength={6}
        returnKeyType="done"
        value={password}
        onChangeText={text => setPassword(text)}
        onSubmitEditing={submitForm}
        onFocus={() => setPasswordTouched(true)}
      />

      {!!error && <Text>{error}</Text>}
      {!!loginError && <Text>{loginError}</Text>}

      <TouchableOpacity onPress={submitForm}>
        <LoginButton loading={isLoading} disabled={isFieldsEmpty} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  const { isLoading, error, isAuthed } = state;
  return { isLoading, error, isAuthed };
};

const mapDispatchToProps = { validateUser, setLoading };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
