import React, { useState } from 'react';
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
import ModalLogout from 'components/ModalLogout';
import Logo from 'components/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { name } = useSelector(authSelectors.getUser);

  // Временно, пока не закрыты рауты
  const userName = name ? name : 'Name';
  // Временно, пока не закрыты рауты

  return (
    <AppHeader>
      <HeaderWrapper>
        <WrapperLogo>
          <Logo />
        </WrapperLogo>

        <HeaderNav>
          <UserName>{userName}</UserName>
          <ButtonLogout
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <StyledIconExit />
            <ExitText>Exit</ExitText>
          </ButtonLogout>
          {modalOpen && <ModalLogout setModalOpen={setModalOpen} />}
        </HeaderNav>
      </HeaderWrapper>
    </AppHeader>
  );
};

export default Header;
