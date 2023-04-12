import { FiPhone } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import styled, { css } from 'styled-components';

import { device, mainContainerWidth } from '../../common/deviceSizes';

export const FooterContainer = styled.footer`
  /* width: ${mainContainerWidth}; */

  @media ${device.mobile} {
    padding: 50px 0;
  }

  @media ${device.desktop} {
    position: fixed;
    bottom: 0px;
    height: 1px;
    width: 100%;
  }
`;

// Icons //

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

export const EmailIcon = styled(MdOutlineMail)`
  ${sharedIconStyle}
`;

export const PhoneIcon = styled(FiPhone)`
  ${sharedIconStyle}
`;

// Elements //

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media ${device.desktop} {
    position: absolute;
    left: 50px;
    bottom: 50px;
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

export const InfoText = styled.a`
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.palette.text.lightPrimary};

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media ${device.mobile} {
    justefy-content: center;
  }

  @media ${device.desktop} {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
  &:hover ${PhoneIcon} {
    color: ${({ theme }) => theme.palette.text.primary};
  }
  &:hover ${EmailIcon} {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
