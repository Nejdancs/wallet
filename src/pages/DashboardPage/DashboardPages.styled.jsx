import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const ContainerDashboard = styled.div`
  min-height: calc(100vh - 80px);

  @media ${device.desktop} {
    display: flex;
  }
`;

export const Section = styled.section`
  background-color: ${p => p.theme.colors.primaryBg};

  @media ${device.tablet} {
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
