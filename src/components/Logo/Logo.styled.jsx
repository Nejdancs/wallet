import styled from 'styled-components';

export const LogoWrapper = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 181px;
    height: 40px;
  }
`;

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    width: 121px;
    font-size: 30px;
  }
`;
