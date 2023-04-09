import React from 'react';

import {
  HomePageContainer,
  HomePageTitle,
  HomePageTitleWrapper,
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
      <HomePageTitleWrapper>
        <HomePageTitle>
          Hello,
          <br />I am <NameHighlighted>Maryna Serheieva</NameHighlighted>,
          <br />
          I am Ukrainian.
          <br />I am Frontend Developer based in Bodø
        </HomePageTitle>
      </HomePageTitleWrapper>
    </HomePageContainer>
  );
};

export default HomePage;
