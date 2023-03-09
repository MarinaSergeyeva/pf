import styled from 'styled-components';

import { device } from '../../common/deviceSizes';

const HeaderContainer = styled.div`
  width: 280px;
  margin: 0 auto;
  padding: 17px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    width: 690px;
  }
  @media ${device.desktop} {
    width: 1170px;
  }
`;

export default HeaderContainer;
