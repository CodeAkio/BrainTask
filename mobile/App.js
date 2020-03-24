import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Container, Header, Title } from './styles';

export default function App() {
  return (
    <Container>
      <Header>
        <SafeAreaView>
          <Title>Brain Task</Title>
        </SafeAreaView>
      </Header>
    </Container>
  );
}

StatusBar.setBackgroundColor('#FF6184');
StatusBar.setBarStyle('light-content');
