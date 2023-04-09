import styled from 'styled-components';

import { mainContainerWidth } from '../../common/deviceSizes';

export const HeaderWrapper = styled.header`
  z-index: 10;
  position: sticky;
  top: 0;
`;
export const HeaderContainer = styled.div`
  width: ${mainContainerWidth};
  height: 60px;
  margin: 0 auto;
  padding: 17px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
