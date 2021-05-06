import React from 'react';
import Navigations from './navigations';
import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigations />
    </ThemeProvider>
  );
};

export default App;
