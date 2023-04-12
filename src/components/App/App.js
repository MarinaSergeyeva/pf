import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Particles } from '../../assets/bg/particles.min';
import About from '../../pages/About/About';
import Contacts from '../../pages/Contacts/Contacts';
import Home from '../../pages/Home/Home';
import Resume from '../../pages/Resume/Resume';
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
