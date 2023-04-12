import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import styled, { css } from 'styled-components';

import { device } from '../../common/deviceSizes';

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.desktop} {
    flex-direction: column;
    position: absolute;
    bottom: 50px;
    right: 50px;
    width: 24px;
  }
`;

export const FollowMe = styled.div`
  display: none;
  cursor: default;

  @media ${device.desktop} {
    display: inline-block;
    color: ${({ theme }) => theme.palette.text.lightPrimary};
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    position: absolute;
    bottom: 100%;
    padding-right: 100px;
    right: 0;
    transform-origin: 100% 0;
    transform: rotate(90deg);

    &:after {
      color: ${({ theme }) => theme.palette.text.lightPrimary};
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      width: 75px;
      height: 1px;
      background: #fff;
    }
  }
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.palette.text.lightPrimary};

  @media ${device.desktop} {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

const sharedIconStyle = css`
  color: ${({ theme }) => theme.palette.text.lightPrimary};
  display: block;
  cursor: pointer;
  font-size: 1.7rem;
  margin-right: 10px;

  @media ${device.mobile} {
    font-size: 1.2rem;
  }

  @media ${device.tablet} {
    font-size: 1.4rem;
  }

  @media ${device.desktop} {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const LinkedInIcon = styled(AiFillLinkedin)`
  ${sharedIconStyle}

  @media ${device.desktop} {
    margin-right: 0;
  }
`;
export const GithubIcon = styled(AiOutlineGithub)`
  ${sharedIconStyle}
  margin:0px;

  @media ${device.desktop} {
    margin-right: 0;
  }
`;
