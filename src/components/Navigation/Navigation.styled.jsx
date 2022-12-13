import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IconHome } from 'images/icon-home.svg';
import { ReactComponent as Statistic } from 'images/icon-statistics.svg';
import { ReactComponent as IconCurrency } from 'images/icon-currency.svg';

export const Nav = styled.nav`
  margin-bottom: 28px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  /* gap: 18px; */

  list-style-type: none;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Item = styled.li`
  display: flex;
`;

export const StyledIconHome = styled(IconHome)`
  fill: ${({ theme }) => theme.colors.inActiveIconColor};
  border-radius: 2px;
  @media screen and (max-width: 767px) {
    width: 38px;
    height: 38px;
    border-radius: 6px;
  }
`;

export const StyledStatistic = styled(Statistic)`
  fill: ${({ theme }) => theme.colors.inActiveIconColor};
  border-radius: 2px;
  @media screen and (max-width: 767px) {
    width: 38px;
    height: 38px;
    border-radius: 6px;
  }
`;

export const StyledIconCurrency = styled(IconCurrency)`
  fill: ${({ theme }) => theme.colors.inActiveIconColor};
  border-radius: 2px;
  @media screen and (max-width: 767px) {
    width: 38px;
    height: 38px;
    border-radius: 6px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 23px;
  align-items: center;

  font-family: ${({ theme }) => theme.fontFamily.poppins};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  &.active {
    font-weight: 700;
    cursor: default;
  }
  &:not(.active):hover {
    color: #24cca7;
  }
  &.active ${StyledIconHome} {
    fill: ${({ theme }) => theme.colors.accentSecondary};
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
  }
  &.active ${StyledStatistic} {
    fill: ${({ theme }) => theme.colors.accentSecondary};
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
  }
  &.active ${StyledIconCurrency} {
    fill: ${({ theme }) => theme.colors.accentSecondary};
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
  }
  &:not(.active):hover ${StyledStatistic} {
    fill: #24cca7;
  }
  &:not(.active):hover ${StyledIconHome} {
    fill: #24cca7;
  }
`;

export const Text = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
