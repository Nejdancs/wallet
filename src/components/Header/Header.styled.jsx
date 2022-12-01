import styled from 'styled-components';
import theme from '../../theme/theme';

const color = theme.colors;

export const AppHeader = styled.header`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${color.secondaryBg};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 768px) {
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
  margin-right: 20px;
  @media screen and (min-width: 480px) {
    margin-right: 30px;
  }
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
  @media screen and (min-width: 768px) {
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

export const NavImage = styled.img`
  margin: 0px;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
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
  background-color: ${color.secondaryBg};
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${color.accentPrimary};
  }
`;
