import {
  FollowMe,
  GithubIcon,
  LinkedInIcon,
  SocialIcon,
  SocialsWrapper,
} from './socialsStyled';

const Socials = () => {
  return (
    <SocialsWrapper>
      <FollowMe>Follow Me</FollowMe>
      <SocialIcon
        href="https://www.linkedin.com/in/maryna-serheieva/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </SocialIcon>
      <a
        href="https://github.com/MarinaSergeyeva"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
    </SocialsWrapper>
  );
};

export default Socials;
