import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const ModalContainer = styled.div`
  padding: 25px;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.secondaryTextColor};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 450px;
`;

export const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: 17px;
  font-weight: 700;
  text-align: center;

  @media ${device.desktop} {
    font-size: 23px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
  }
  /* z-index: 99; */
`;

export const Modal = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
