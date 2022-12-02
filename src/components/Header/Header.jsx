import React, { useState } from 'react';
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
import ModalLogout from 'components/ModalLogout';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
            <ButtonLogout
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <NavImage src={exit} />
              <ExitText>Exit</ExitText>
            </ButtonLogout>
          </HeaderNavItem>
          {modalOpen && <ModalLogout setModalOpen={setModalOpen} />}
        </HeaderNav>
      </HeaderWrapper>
    </AppHeader>
  );
};

export default Header;
