import { HeaderContainer, HeaderWrapper, Logo } from './headerStyled';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>LOGO</Logo>
        <Navigation />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
