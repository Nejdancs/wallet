import styled from 'styled-components';
import BackgroundPicture from '../../images/CurrencyBackground.png';

export const CurrencyListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 30px 30px 0px 0px;
  background-color: #4a56e2;
  opacity: 0.8;
  padding: 12px 20px;
  height: 50px;

  @media (min-width: 768px) {
    padding: 12px 12px 12px 20px;
  }
  @media (min-width: 1280px) {
    height: 60px;
    padding: 16px 64px 16px 44px;
  }
`;

export const CurrencyList = styled.ul`
  margin: 0;
  height: 124px;
  padding: 12px 20px 16px 20px;
  border-radius: 0px 0px 30px 30px;

  background-color: #4a56e2;
  background-image: url(${BackgroundPicture});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;

  @media (min-width: 768px) {
    height: 132px;
    padding: 16px 20px 20px 20px;
  }
  @media (min-width: 1280px) {
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

  @media (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const CurrencyWrapper = styled.div`
  width: 280px;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
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

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
