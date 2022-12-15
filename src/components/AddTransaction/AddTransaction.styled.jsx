import styled from 'styled-components';
import { Field } from 'formik';
import { motion } from 'framer-motion';
import device from 'assets/breakpoints/device';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const Calendar = styled.div`
  position: relative;
`;

export const DateIcon = styled.img`
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 0;
`;

export const Transaction = styled(motion.div)`
  position: relative;
  width: 320px;
  z-index: 2;
  padding: 20px;

  background-color: #ffffff;
  @media ${device.tablet} {
    position: relative;
    width: 540px;
    padding: 40px 60px;
    border-radius: 20px;
  }

  @media screen and (min-width: 768px) and (max-height: 605px) {
    align-self: flex-start;
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

export const InputContainer = styled.div`
  @media ${device.tablet} {
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

  @media ${device.tablet} {
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

export const Label = styled.label`
  display: block;
  position: relative;
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 32px;
  left: 5px;
  font-size: 12px;
  line-height: 1.14;
  color: rgb(240, 0, 0);
`;
