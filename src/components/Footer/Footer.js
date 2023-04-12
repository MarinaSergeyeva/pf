import {
  EmailIcon,
  FooterContainer,
  InfoText,
  InfoWrapper,
  PhoneIcon,
} from './footerStyled';
import Socials from '../Socials/Socials';

const Footer = () => {
  return (
    <FooterContainer>
      <InfoWrapper>
        <InfoText href="mailto:morrrinad@gmail.com">
          <EmailIcon />
          morrrinad@gmail.com
        </InfoText>
        <InfoText href="tel:+4796742628">
          <PhoneIcon />
          +47 967-42-628
        </InfoText>
      </InfoWrapper>
      <Socials />
    </FooterContainer>
  );
};

export default Footer;
