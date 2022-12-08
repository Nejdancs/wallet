import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const BalanceWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 20px 11px 32px;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.secondaryTextColor};

  @media ${device.tablet} {
    width: 336px;
    padding-left: 40px;
    margin-left: 0;
  }

  @media ${device.desktop} {
    width: 395px;
  }
`;

export const BalanceTitle = styled.p`
  margin-bottom: 12px;
  color: #a6a6a6;
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.circe};
  font-size: 12px;
`;

export const BalanceValue = styled.p`
  color: ${props => props.theme.colors.primaryTextColor};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 30px;
  font-weight: 700;
`;

export const BalanceSpan = styled.span`
  margin-right: 5px;
  font-weight: normal;
`;
