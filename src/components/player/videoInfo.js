import React from 'react';

import { Card, Paragraph, Title } from 'react-native-paper';

export default ({ nowPlaying }) => {
  const { title, description } = nowPlaying;
  return (
    <Card>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
};
