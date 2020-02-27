import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { MainContainer } from '../components/containers';
import { Logo } from '../components/logo';
import { LoginForm } from '../components/forms';

export default ({ navigation }) => {
  return (
    <MainContainer>
      <KeyboardAvoidingView behavior="position">
        <Logo />
        <LoginForm navigation={navigation} />
      </KeyboardAvoidingView>
    </MainContainer>
  );
};
