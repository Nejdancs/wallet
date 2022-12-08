import styled from 'styled-components';
import device from 'assets/breakpoints/device';
import { ReactComponent as IconExit } from 'images/exit.svg';

export const WrapperLogo = styled.div`
  margin-right: auto;
`;

export const AppHeader = styled.header`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondaryBg};
  @media ${device.tablet} {
    height: 80px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
`;

export const HeaderNav = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style: none;
  align-items: center;
`;

export const HeaderNavItem = styled.li`
  display: flex;
  margin: 0;
  justify-content: center;
  color: #bdbdbd;
  text-align: center;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  &:not(:last-child) {
    margin-right: 8px;
  }
  @media ${device.tablet} {
    padding-top: 5px;
    height: 30px;
    &:not(:last-child) {
      margin-right: 0px;
      padding-right: 12px;
      border-right: 1px solid #bdbdbd;
    }
    &:last-child {
      margin-left: 12px;
    }
  }
`;

// export const NavImage = styled.img`
//   margin: 0px;
//   width: 18px;
//   height: 18px;
//   margin-right: 8px;
//   @media ${device.tablet} {
//     margin-top: 3px;
//   }
// `;

export const StyledIconExit = styled(IconExit)`
  margin: 0px;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  fill: currentColor;
  @media ${device.tablet} {
    margin-top: 3px;
  }
`;

export const ExitText = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  color: currentColor;
  clip: rect(0 0 0 0);
  overflow: hidden;

  @media ${device.tablet} {
    margin-top: 3px;
    position: static;
    width: 34px;
    height: 24px;
  }
`;

export const ButtonLogout = styled.button`
  padding: 0px;
  display: flex;
  border: none;
  color: #bdbdbd;
  background-color: ${props => props.theme.colors.secondaryBg};
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.accentPrimary};
  }
`;
