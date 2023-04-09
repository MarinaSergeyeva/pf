import React from 'react';

import {
  HomePageContainer,
  HomePageTitle,
  MainPortrait,
  MainPortraitWrapper,
  NameHighlighted,
} from './homeStyled';
import portrait from '../../assets/images/HomePage/portrait.jpg';

const HomePage = () => {
  return (
    <HomePageContainer>
      <MainPortraitWrapper>
        <MainPortrait src={portrait} alt="portrait photo" />
      </MainPortraitWrapper>
      <HomePageTitle>
        Hello,
        <br />I am <NameHighlighted>Maryna Serheieva</NameHighlighted>,
        <br />
        I am Ukrainian.
        <br />I am Frontend Developer based in Bodø
      </HomePageTitle>
    </HomePageContainer>
  );
};

export default HomePage;
