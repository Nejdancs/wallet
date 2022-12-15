import styled from 'styled-components';
import { Field } from 'formik';

export const Calendar = styled.div`
  position: relative;
`;

export const DateIcon = styled.img`
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 0;
`;

export const Transaction = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 0;

  background-color: #ffffff;
  overflow-y: auto;
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

export const ModalInput = styled(Field)`
  border: none;
  padding: 8px;
  width: 100%;
  margin-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
  color: #000000;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

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
  color: #bdbdbd;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
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
  border-bottom: 1px solid #e0e0e0;
  height: 30px;
  width: 100%;
  color: #000000;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  :hover,
  :focus {
    outline: none;
    border-bottom: 1px solid #e0e0e0;
  }
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
