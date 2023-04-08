import { HeaderContainer, Logo, NavItem, NavList } from './headerStyled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
      <nav>
        <NavList>
          <NavItem>About</NavItem>
          <NavItem>CV</NavItem>
          <NavItem>Contacts</NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
