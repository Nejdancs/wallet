import styled from 'styled-components';
import { Link } from 'react-router-dom';
import device from 'assets/breakpoints/device';

export const LogoWrapper = styled(Link)`
  width: 120px;
  height: 30px;
  display: flex;
  @media ${device.tablet} {
    width: 181px;
    height: 40px;
  }
`;

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  @media ${device.tablet} {
    margin-right: 20px;
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin: 0px;
  @media ${device.tablet} {
    width: 121px;
    font-size: 30px;
  }
`;
