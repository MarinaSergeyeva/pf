import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '../../common/deviceSizes';

export const PrimaryNav = styled.nav`
  /* z-index: 14; */
  height: 90px;
  display: flex;
  background: ${({ theme }) => theme.palette.background.default};
  justify-content: space-between;
  padding: 3px calc((100vw - 1000px) / 2);
`;

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.palette.text.primary};
  @media screen and ${device.mobile} {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  @media screen and ${device.mobile} {
    display: none;
  }
`;
