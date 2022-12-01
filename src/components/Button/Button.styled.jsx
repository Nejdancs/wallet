import styled from 'styled-components';

export const Button = styled.button`
  padding: 13px 55px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.accentPrimary};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
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
  min-width: 280px;
  box-shadow: ${props => props.theme.shadows.bar_shade};
  :hover,
  :focus {
    transform: scale(1.03);
  }
`;
