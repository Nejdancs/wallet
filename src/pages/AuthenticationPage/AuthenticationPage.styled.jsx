import styled from 'styled-components';
import device from 'assets/breakpoints/device';
import Log_img_tablet from '../../images/Log_img_tablet.png';
import Log_img_desctop from '../../images/Log_img_desctop.png';
import Reg_img_tablet from '../../images/Reg_img_tablet.png';
import Reg_img_desctop from '../../images/Reg_img_desctop.png';
import Viollet_semicircle from '../../images/Viollet_semicircle.png';
import Pink_semicircle from '../../images/Pink_semicircle.png';

export const Container = styled.div`
  display: block;
  height: 100%;
  padding: 0;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  top: 0px;
  left: 0px;
  background-color: ${props => props.theme.colors.secondaryBg};

  @media ${device.tablet} {
    background-color: ${props => props.theme.colors.authPageBg};
    background-image: url(${Viollet_semicircle}), url(${Pink_semicircle});
    background-repeat: no-repeat, no-repeat;
    background-position: 0px 100%, right 0px top 0px;

    padding: 60px 114px 0;
    width: 100vw;
    min-height: 1024px;
    text-align: center;
    height: 100vh;
  }

  @media ${device.desktop} {
    flex-direction: row;
    padding: 0;
    min-height: 720px;
  }
`;

export const ImgSection = styled.div`
  @media ${device.tablet} {
    display: flex;
    margin-bottom: 50px;
    margin-right: auto;
    margin-left: auto;
    width: 540px;
  }
  @media ${device.desktop} {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0px;
  }
`;

export const ImgContainerLogin = styled.div`
  @media ${device.tablet} {
    background-image: url(${Log_img_tablet});
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: padding-box;

    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 260px;
  }

  @media ${device.desktop} {
    background-image: url(${Log_img_desctop});
    width: 435px;
    height: 420px;
    margin-right: 32px;
    margin-bottom: 24px;
  }
`;

export const NameApp = styled.p`
  display: none;
  @media ${device.tablet} {
    color: ${p => p.theme.colors.primaryTextColor};
    display: flex;
    margin-right: auto;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    margin-left: 40px;
    align-items: center;
  }
  @media ${device.desktop} {
    margin-left: auto;
    width: 187px;
  }
`;

export const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  padding-top: 20px;
  @media screen and (max-width: 768px) and (min-height: 570px) {
    height: 100vh;
  }
  @media ${device.tablet} {
    padding-top: 0px;
  }
  @media ${device.desktop} {
    width: 57%;
    height: 100%;
    background: hsla(0, 0%, 100%, 0.3);
    backdrop-filter: blur(15px);
  }
`;
//====================== Style for register form ==========================
export const ImgContainerRegister = styled.div`
  @media ${device.tablet} {
    background-image: url(${Reg_img_tablet});
    background-repeat: no-repeat;
    background-size: cover;

    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 274px;
  }

  @media ${device.desktop} {
    background-image: url(${Reg_img_desctop});
    width: 452px;
    height: 412px;
    margin-bottom: 32px;
    margin-right: 32px;
  }
`;
