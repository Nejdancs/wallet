import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.primaryBg};
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    background-image: linear-gradient(rgba(47, 48, 58, 0), rgba(47, 48, 58, 0)),
      url(${p => p.bigImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const ContainerDashboard = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
export const TabletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DesktopWrapper = styled.div`
  padding-top: 46px;
`;
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0px 20px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 16px;
    width: 1280px;
  }
`;

export const Separator = styled.div`
  min-height: 100vh;
  margin: 0 69px;
  border: 1px solid #e7e5f2;
  box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
    1px 0px 0px rgba(255, 255, 255, 0.6);
`;
