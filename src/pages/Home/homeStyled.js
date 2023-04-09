import styled from 'styled-components';

import { device, mainContainerWidth } from '../../common/deviceSizes';

export const HomePageContainer = styled.div`
  width: ${mainContainerWidth};
  margin: 0 auto;

  @media ${device.largeTablet} {
    display: flex;
  }
`;

export const MainPortraitWrapper = styled.div`
  position: relative;
  top: -65px;
  left: -60px;
  width: 450px;
  height: 400px;
  filter: drop-shadow(
    3px 7px 7px ${props => props.theme.palette.text.secondary}
  );

  @media ${device.tablet} {
    top: -50px;
    left: -100px;
    width: 640px;
    height: 460px;
  }

  @media ${device.desktop} {
    top: -80px;
    left: -80px;
    width: 750px;
    height: 650px;
  }
`;

export const MainPortrait = styled.img`
  clip-path: polygon(31% 0, 100% 25%, 61% 100%, 0 93%);
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s ease-out;
  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.05, 1.05);
  }

  @media ${device.largeTablet} {
    &:hover {
      transform: scale(1.15, 1.15);
    }
  }
`;

export const HomePageTitleWrapper = styled.div`
  @media ${device.tablet} {
    position: absolute;
    width: 300px;
    top: 400px;
    right: 50px;
  }

  @media ${device.desktop} {
    position: absolute;
    width: 600px;
    top: 500px;
    right: 100px;
  }
`;

export const HomePageTitle = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;

  @media ${device.largeTablet} {
    align-self: flex-end;
  }

  @media ${device.desktop} {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const NameHighlighted = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;
