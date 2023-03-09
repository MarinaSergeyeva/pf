import React from 'react';

import { ThemeProvider } from 'styled-components';

import HomePage from '../../pages/HomePage/HomePage';
import theme from '../../theme/theme';
import Header from '../Header/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: `${theme.palette.background.default}` }}>
        <Header />
        <HomePage />
      </div>
    </ThemeProvider>
  );
};

export default App;
