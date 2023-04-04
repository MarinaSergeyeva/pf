import React from 'react';

// import { TypeAnimation } from 'react-type-animation';

import {
  HomePageContainer,
  HomePageTitle,
  MainPortrait,
  MainPortraitWrapper,
  NameHighlighted,
} from './homePageStyled';
import portrait from '../../assets/images/HomePage/portrait.jpg';

const HomePage = () => {
  return (
    <HomePageContainer>
      <MainPortraitWrapper>
        <MainPortrait width={600} src={portrait} alt="portrait photo" />
      </MainPortraitWrapper>
      <HomePageTitle>
        Hello,
        <br />I am <NameHighlighted>Maryna Serheieva</NameHighlighted>,
        <br />
        I am Ukrainian.
        <br />I am Frontend Developer based in Bodø
      </HomePageTitle>
      {/* <TypeAnimation
        speed={1}
        sequence={[
          'One', // Types 'One'
          1000, // Waits 1s
          'Two', // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          'Three', // Types 'Three' without deleting 'Two'
          () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper="div"
        cursor
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      /> */}
    </HomePageContainer>
  );
};

export default HomePage;
