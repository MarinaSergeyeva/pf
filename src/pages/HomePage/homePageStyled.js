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
  width: 550px;
  height: 850px;
`;

export const MainPortrait = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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
