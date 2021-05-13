import React from 'react';
import {ThemeProvider} from '@emotion/react';
import styled from '@emotion/native';
import {StatusBar} from 'react-native';

import {theme} from './theme';
import Navigations from './navigations';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/*<Container>*/}
      <StatusBar />
      <Navigations />
      {/*</Container>*/}
    </ThemeProvider>
  );
};

export default App;
