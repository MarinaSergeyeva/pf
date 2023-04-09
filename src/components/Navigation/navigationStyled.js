import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '../../common/deviceSizes';

export const PrimaryNav = styled.nav`
  /* z-index: 14; */
  display: flex;
  background: ${({ theme }) => theme.palette.background.default};
  justify-content: space-between;
`;

export const MenuLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  height: 100%;
  &:not(:last-child) {
    margin-right: 40px;
  }
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    background-color: ${({ theme }) => theme.palette.text.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &.active:after {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  &.active:hover:after {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  &:hover:after {
    background-color: #ffffff;
    transform: scaleX(1);
    transform-origin: bottom left;
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
