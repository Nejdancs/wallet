import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import Button from 'components/Button/Button';
import device from 'assets/breakpoints/device';

export const Calendar = styled.div`
  position: relative;
`;

export const DateIcon = styled.img`
  position: absolute;

  right: 0;
  top: 0;
`;

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Transaction = styled.div`
  position: absolute;

  width: 320px;

  padding: 20px;

  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 540px;
    height: 623px;
    padding: 40px 60px;
    border-radius: 20px;
  }
`;

export const ModalTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  margin-bottom: 40px;
`;

export const CloseIcon = styled.img`
  width: 60%;
  height: 60%;
  stroke: currentColor;
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

export const InputContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ModalInput = styled(Field)`
  border: none;
  padding: 8px;
  width: 100%;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 30px;
  }

  border-bottom: 1px solid #e0e0e0;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: #000000;

  :hover,
  :focus {
    outline: none;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const ButtonSmall = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 0;
  padding: 3px 10px;
  border: 1px solid
    ${({ main, theme }) =>
      main ? theme.colors.accentPrimary : theme.colors.accentSecondary};
  background-color: ${({ main, theme }) =>
    main ? theme.colors.accentPrimary : theme.colors.secondaryBg};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  /* max-width: 60px; */
  height: 40px;
  color: ${({ main, theme }) =>
    main ? theme.colors.secondaryTextColor : theme.colors.accentSecondary};
  cursor: pointer;

  font-family: inherit;
  text-decoration: none;
  font-size: 18px;
  /* line-height: 27px; */
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 400;

  :hover,
  :focus {
    transform: scale(1.03);
  }
  @media ${device.mobile} {
    padding: 13px 65px;
    width: 300px;
  }
`;

export const Selector = styled(Field)`
  border: none;
  outline: none;

  height: 30px;
  width: 100%;

  margin-bottom: 40px;

  border-bottom: 1px solid #e0e0e0;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: #bdbdbd;
`;

export const SelectOption = styled.option`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const CommentInput = styled(Field)`
  border: none;
  padding: 8px;
  margin-bottom: 40px;

  height: 30px;
  width: 100%;

  border-bottom: 1px solid #e0e0e0;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: #000000;

  :hover,
  :focus {
    outline: none;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const BtnList = styled.div`
  display: grid;

  justify-content: center;
  gap: 20px;
`;

export const Label = styled.label`
  display: block;
  position: relative;
`;
