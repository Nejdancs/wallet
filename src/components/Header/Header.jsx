import React from 'react';
import Logo from 'components/Logo/Logo';
import exit from 'images/exit.svg';
import {
  AppHeader,
  LogoWrapper,
  LogoImg,
  LogoText,
  HeaderNav,
  HeaderNavItem,
  HeaderWrapper,
  NavImage,
  ExitText,
  ButtonLogout,
} from './Header.styled';

const Header = () => {
  const TestClick = event => {
    event.preventDefault();
  };

  return (
    <AppHeader>
      <HeaderWrapper>
        <Logo />
        <HeaderNav>
          <HeaderNavItem>Name</HeaderNavItem>
          <HeaderNavItem>
            <ButtonLogout onClick={TestClick}>
              <NavImage src={exit} />
              <ExitText>Exit</ExitText>
            </ButtonLogout>
          </HeaderNavItem>
        </HeaderNav>
      </HeaderWrapper>
    </AppHeader>
  );
};

export default Header;
