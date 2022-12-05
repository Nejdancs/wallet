import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const StyledButton = styled.button`
  border-radius: 20px;
  margin: 0 auto 20px;
  border: 1px solid
    ${({ main, theme }) =>
      main ? theme.colors.accentPrimary : theme.colors.accentSecondary};
  background-color: ${({ main, theme }) =>
    main ? theme.colors.accentPrimary : theme.colors.secondaryBg};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  width: 280px;
  height: 50px;
  color: ${({ main, theme }) =>
    main ? theme.colors.secondaryTextColor : theme.colors.accentSecondary};
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
