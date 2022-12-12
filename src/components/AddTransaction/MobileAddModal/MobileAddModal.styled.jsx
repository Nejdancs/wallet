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

// export const Layout = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.25);
//   position: fixed;
//   top: 0;
//   left: 0;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1;
// `;

export const Transaction = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;

  background-color: #ffffff;

  z-index: 1;
`;

export const ModalTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  margin-bottom: 40px;
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
  background-color: #24cca7;
  border-radius: 50%;
  cursor: pointer;
  border: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus-within {
    background-color: rgb(7, 126, 100);
  }
`;

export const ModalInput = styled(Field)`
  border: none;
  padding: 8px;
  width: 100%;

  margin-bottom: 40px;

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

export const BtnList = styled.ul`
  display: grid;

  justify-content: center;
  gap: 20px;
`;

export const Label = styled.label`
  display: block;
  position: relative;
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 48px;
  left: 5px;
  font-size: 12px;
  line-height: 1.14;
  color: rgb(240, 0, 0);
`;