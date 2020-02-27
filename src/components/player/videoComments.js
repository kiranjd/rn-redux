import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';
import { Input } from '../forms';
import { AddCommentButton } from '../button';
import { addComment } from '../../redux/actions';

const AddComment = ({ videoId, addCommentVideo }) => {
  const [comment, setComment] = useState('');
  return (
    <View style={styles.addCommentWrapper}>
      <KeyboardAvoidingView
        behavior="position"
        enabled
        keyboardVerticalOffset={310}
        style={{ flexDirection: 'row' }}
      >
        <Input
          mode="outlined"
          placeholder="Add your comments"
          maxLength={320}
          value={comment}
          onChangeText={text => setComment(text)}
          onSubmitEditing={() => addCommentVideo({ videoId, comment })}
        />
        {/* <AddCommentButton
          onPress={() => addCommentVideo({ videoId, comment })}
        /> */}
      </KeyboardAvoidingView>
    </View>
  );
};

const VideoComments = ({ nowPlaying, addComment: _addComment, comments }) => {
  const { id } = nowPlaying;

  const vidComments = comments.filter(ele => ele.id === id);
  console.log('TCL: VideoComments -> vidComments', vidComments);
  return (
    <>
      <Text style={styles.commentsHeader}>Comments</Text>
      <AddComment videoId={nowPlaying.id} addCommentVideo={_addComment} />
    </>
  );
};

const mapStateToProps = state => {
  const { nowPlaying, comments } = state;

  return { nowPlaying, comments };
};

const mapDispatchToProps = { addComment };

export default connect(mapStateToProps, mapDispatchToProps)(VideoComments);
