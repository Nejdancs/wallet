import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  width: 280px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8px;
  padding-left: 32px;
  padding-bottom: 11px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.secondaryTextColor};

  @media screen and (min-width: 768px) {
    width: 336px;
    padding-left: 40px;
    margin-left: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const BalanceTitle = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  color: #a6a6a6;
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.circe};
  font-size: 12px;
`;

export const BalanceValue = styled.p`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.colors.primaryTextColor};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 30px;
  font-weight: 700;
`;

export const BalanceSpan = styled.span`
  margin-right: 5px;
  font-weight: normal;
`;
