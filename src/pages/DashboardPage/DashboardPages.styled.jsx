import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const ContainerDashboard = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const Section = styled.section`
  min-height: calc(100vh - 60px);
  background-color: ${p => p.theme.colors.primaryBg};

  @media ${device.tablet} {
    min-height: calc(100vh - 80px);
    background-size: cover;
    background-image: linear-gradient(rgba(47, 48, 58, 0), rgba(47, 48, 58, 0)),
      url(${p => p.mediumImg});
    background-repeat: no-repeat;
    background-position: center;
  }
  @media ${device.desktop} {
    background-image: linear-gradient(rgba(47, 48, 58, 0), rgba(47, 48, 58, 0)),
      url(${p => p.bigImg});
  }
`;
