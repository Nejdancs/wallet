import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const Button = styled.button`
  border-radius: 20px;
  margin: 0 auto 20px;
  border: 1px ${props => props.theme.colors.accentPrimary};
  background-color: ${props => props.theme.colors.accentPrimary};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  width: 280px;
  height: 50px;
  color: ${props => props.theme.colors.secondaryTextColor};
  cursor: pointer;

  font-family: inherit;
  text-decoration: none;
  font-size: 18px;
  line-height: 27px;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 400;

  :hover,
  :focus {
    transform: scale(1.03);
  }
  @media ${device.mobile} {
    padding: 13px 65px;
  }
`;
