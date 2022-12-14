import logo from 'images/logo.svg';
import { LogoWrapper, LogoImg, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper to="/">
      <LogoImg src={logo} />
      <LogoText>Wallet</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
