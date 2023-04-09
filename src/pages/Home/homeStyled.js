import styled from 'styled-components';

import { device } from '../../common/deviceSizes';

export const HomePageContainer = styled.div`
  display: flex;
  padding: 50px 30px 30px;

  @media ${device.tablet} {
    padding: 35px 50px 50px;
  }

  @media ${device.desktop} {
    padding: 20px 70px 70px;
  }
`;

export const MainPortraitWrapper = styled.div`
  height: 600px;
  width: 600px;
  filter: drop-shadow(
    3px 7px 7px ${props => props.theme.palette.text.secondary}
  );
`;

export const MainPortrait = styled.img`
  clip-path: polygon(31% 0, 100% 25%, 61% 100%, 0 93%);
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s ease-out;
  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.15, 1.15);
  }
`;

export const HomePageTitle = styled.div`
  position: absolute;
  bottom: 50px;
  left: 550px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 40px;
  font-weight: 600;
  line-height: 56px;
  padding: 20px 80px;
`;

export const NameHighlighted = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;
