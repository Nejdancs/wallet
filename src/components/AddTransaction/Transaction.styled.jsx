import styled from 'styled-components';
import { Field } from 'formik';

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
  width: 18px;
  height: 18px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  padding: 0;
  top: 20px;
  right: 20px;

  width: 18px;
  height: 18px;

  border: none;
  outline: none;

  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;

  &:focus > ${CloseIcon} {
    fill: #24cca7;
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

export const ActionBtn = styled.button`
  width: 300px;
  height: 50px;

  padding: 0;

  background: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #4a56e2;

  cursor: pointer;

  :hover,
  :focus {
    border: none;
    background-color: #24cca7;
    color: #ffffff;
  }
`;
