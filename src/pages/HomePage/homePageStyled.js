import styled from 'styled-components';

import { device } from '../../common/deviceSizes';

export const HomePageContainer = styled.div`
  padding: 50vw 30px 30px;

  @media ${device.tablet} {
    padding: 35vw 50px 50px;
  }

  @media ${device.desktop} {
    padding: 20vw 70px 70px;
  }
`;

export const HomePageTitle = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`;

export const NameHighlighted = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
`;
