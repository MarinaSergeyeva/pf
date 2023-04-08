import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Particles } from '../../assets/bg/particles.min';
import HomePage from '../../pages/HomePage/HomePage';
import GlobalStyles from '../../styles/Global';
import theme from '../../theme/theme';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App = () => {
  // eslint-disable-next-line func-names
  window.onload = function () {
    Particles.init({
      selector: '.background',
      color: theme.palette.background.light,
      maxParticles: 500,
      connectParticles: false,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <header>
        <Header />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

export default App;
