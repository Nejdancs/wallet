import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 25px;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.secondaryTextColor};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  padding: 0;
  color: ${p => p.theme.colors.primaryTextColor};
  background-color: ${p => p.theme.colors.inActiveIconColor};
  border: 1px solid ${p => p.theme.colors.accentSecondary};
  border-radius: 50%;
  cursor: pointer;
  transition: transform 2500ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    animation 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus-within {
    transform: scale(1.1) rotate(360deg);
    color: ${p => p.theme.colors.accentSecondary};
    background-color: ${p => p.theme.colors.accentSecondary};
  }
`;

export const CloseIcon = styled.img`
  width: 60%;
  height: 60%;
  stroke: currentColor;
`;

export const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: -30px;
  margin-left: -30px;
`;

export const ConfirmBtn = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 30px;
  margin-top: 30px;
  background: ${p => p.theme.colors.accentPrimary};
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: transparent;
  color: ${p => p.theme.colors.secondaryTextColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${p => p.theme.colors.accentPrimary};
    transform: scale(1.1);
  }
`;

export const CancelBtn = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 30px;
  margin-top: 30px;
  background: ${p => p.theme.colors.firstCircleColorBg};
  border: 1px solid ${p => p.theme.colors.accentSecondary};
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.accentSecondary};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: ${p => p.theme.colors.accentSecondary};
    color: ${p => p.theme.colors.secondaryTextColor};
    transform: scale(1.1);
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  z-index: 99;
`;

export const Modal = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
