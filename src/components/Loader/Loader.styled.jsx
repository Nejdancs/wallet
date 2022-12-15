import styled from 'styled-components';
import device from 'assets/breakpoints/device';
import mediumImg from 'images/Rectangle.png';
import bigImg from 'images/rectangleDesk.png';

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.primaryBg};

  @media ${device.tablet} {
    background-size: cover;
    background-image: linear-gradient(rgba(47, 48, 58, 0), rgba(47, 48, 58, 0)),
      url(${mediumImg});
    background-repeat: no-repeat;
    background-position: center;
  }

  @media ${device.desktop} {
    background-image: linear-gradient(rgba(47, 48, 58, 0), rgba(47, 48, 58, 0)),
      url(${bigImg});
  }
`;

export const LoaderComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} {
    align-items: flex-start;
    padding-top: 60px;
  }
`;
