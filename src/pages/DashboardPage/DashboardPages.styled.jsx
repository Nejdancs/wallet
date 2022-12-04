import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const ContainerDashboard = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const Section = styled.section`

  @media ${device.mobile} {
     
   background-color: ${p => p.theme.colors.primaryBg};
  }
  min-height: calc(100vh - 85px);
  backdrop-filter: blur(25px);
  background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
  );

  @media ${device.tablet} {
   
    background-size: cover;
    background-image: linear-gradient(rgba(47, 48, 58, 0), rgba(47, 48, 58, 0)),
      url(${p => p.mediumImg});
    background-repeat: no-repeat;
    background-position: center;
  }
    @media ${device.desktop}  {
          background-image: linear-gradient(rgba(47, 48, 58, 0), rgba(47, 48, 58, 0)),
      url(${p => p.bigImg}); 
`;
