import styled from 'styled-components';
import BackgroundPicture from '../../images/CurrencyBackground.png';
import device from 'assets/breakpoints/device';

export const CurrencyListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 30px 30px 0px 0px;
  background-color: #4a56e2;
  opacity: 0.8;
  padding: 12px 20px;
  height: 50px;

  @media (min-width: 400px) {
    padding: 12px 40px;
  }

  @media ${device.tablet} {
    padding: 12px 12px 12px 20px;
  }
  @media ${device.desktop} {
    height: 60px;
    padding: 16px 64px 16px 44px;
  }
`;

export const CurrencyList = styled.ul`
  margin: 0;
  height: 220px;
  padding: 12px 20px 16px;
  border-radius: 0px 0px 30px 30px;

  background-color: #4a56e2;
  background-image: url(${BackgroundPicture});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;

  @media (min-width: 400px) {
    padding: 16px 40px 20px;
  }

  @media ${device.tablet} {
    height: 132px;
    padding: 16px 20px 20px;
  }
  @media ${device.desktop} {
    height: 287px;
    padding: 20px 61px 20px 58px;
  }
`;

export const CurrensyItems = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media ${device.desktop} {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const CurrencyWrapper = styled.div`
  margin: 0 auto;
  width: 100%;

  @media ${device.tablet} {
    width: 336px;
  }
  @media ${device.desktop} {
    width: 393px;
  }
`;

export const HeaderText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  color: #ffffff;
`;

export const CurrencyInfoText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;
