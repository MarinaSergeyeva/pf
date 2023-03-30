import React from 'react';

import { ThemeProvider } from 'styled-components';

import HomePage from '../../pages/HomePage/HomePage';
import GlobalStyles from '../../styles/Global';
import theme from '../../theme/theme';
import Header from '../Header/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
