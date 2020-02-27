import React from 'react';

import { connect } from 'react-redux';

import { MainContainer } from '../components/containers';
import WelcomeSnack from '../components/snackbar/welcomeSnack';
import { PlaylistList } from '../components/list';

const Home = ({ user = {} }) => {
  const { name } = user;

  return (
    <MainContainer>
      <WelcomeSnack name={name} />
      <PlaylistList />
    </MainContainer>
  );
};

const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
