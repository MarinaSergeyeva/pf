import { Hamburger, Menu, MenuLink, PrimaryNav } from './navigationStyled';

const Navigation = () => {
  return (
    <PrimaryNav>
      <Hamburger />
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/resume">Resume</MenuLink>
        <MenuLink to="/contacts">Contacts</MenuLink>
      </Menu>
    </PrimaryNav>
  );
};

export default Navigation;
