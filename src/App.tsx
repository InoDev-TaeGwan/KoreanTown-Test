import React from 'react';
import Navigations from './navigations';
import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';
import styled from '@emotion/native';
import {StatusBar} from 'react-native';
const Container = styled.SafeAreaView`
  flex: 1;
`;
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar />
        <Navigations />
      </Container>
    </ThemeProvider>
  );
};

export default App;
