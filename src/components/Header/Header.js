import { HeaderContainer, Logo } from './headerStyled';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
