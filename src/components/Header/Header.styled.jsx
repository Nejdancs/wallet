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
  width: 100%;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media ${device.tablet} {
    gap: 12px;
  }
`;

export const UserName = styled.p`
  color: #bdbdbd;
  font-size: 18px;
  line-height: 1.5;

  @media ${device.tablet} {
    padding-right: 12px;
    border-right: 1px solid #bdbdbd;
  }
`;

export const StyledIconExit = styled(IconExit)`
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  fill: currentColor;
`;

export const ExitText = styled.p`
  display: none;

  @media ${device.tablet} {
    display: block;
    font-size: 18px;
    line-height: 1.5;
    padding-top: 3px;
  }
`;

export const ButtonLogout = styled.button`
  padding: 0px;
  display: flex;
  align-items: center;
  border: none;
  color: #bdbdbd;
  background-color: ${props => props.theme.colors.secondaryBg};
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.accentPrimary};
  }
`;
