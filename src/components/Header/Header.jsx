import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import ModalLogout from 'components/ModalLogout/ModalLogout';
import Logo from 'components/Logo/Logo';
import {
  AppHeader,
  HeaderNav,
  UserName,
  HeaderWrapper,
  StyledIconExit,
  ExitText,
  ButtonLogout,
  WrapperLogo,
} from './Header.styled';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { name } = useSelector(authSelectors.getUser);

  return (
    <AppHeader>
      <HeaderWrapper>
        <WrapperLogo>
          <Logo />
        </WrapperLogo>

        <HeaderNav>
          <UserName>{name}</UserName>
          <ButtonLogout
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <StyledIconExit />
            <ExitText>Exit</ExitText>
          </ButtonLogout>
          <AnimatePresence>
            {modalOpen && <ModalLogout setModalOpen={setModalOpen} />}
          </AnimatePresence>
        </HeaderNav>
      </HeaderWrapper>
    </AppHeader>
  );
};

export default Header;
