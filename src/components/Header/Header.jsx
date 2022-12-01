import React from "react";
import {AppHeader, LogoWrapper, LogoImg, LogoText, HeaderNav, HeaderNavItem, HeaderWrapper, NavImage, ExitText, ButtonLogout} from "./Header.styled"

const Header = () => {
    const TestClick = (event) => {
        event.preventDefault();
    }

    return (
        <AppHeader>
            <HeaderWrapper>
             <LogoWrapper>
                <LogoImg src="./logo.svg" />
                <LogoText>Wallet</LogoText>
            </LogoWrapper>
            <HeaderNav>
                <HeaderNavItem>Name</HeaderNavItem>
                <HeaderNavItem><ButtonLogout onClick={TestClick}><NavImage src="./exit.svg" /><ExitText>Exit</ExitText></ButtonLogout></HeaderNavItem>
             </HeaderNav>
            </HeaderWrapper>
        </AppHeader>
    );
}

export default Header;