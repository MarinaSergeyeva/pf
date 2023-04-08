import styled from 'styled-components';

import { device } from '../../common/deviceSizes';

export const HeaderContainer = styled.div`
  width: 280px;
  margin: 0 auto;
  padding: 17px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    width: 690px;
  }
  @media ${device.desktop} {
    width: 1170px;
  }
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 20px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.black};
`;
