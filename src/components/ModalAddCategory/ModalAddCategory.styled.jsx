import styled from 'styled-components';
import { Field } from 'formik';
import device from 'assets/breakpoints/device';
import theme from 'theme/theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Modal = styled.div`
  padding: 20px 20px 40px;
  text-align: center;
  z-index: 4;
  background-color: #fff;
  overflow-y: auto;

  @media ${device.tablet} {
    width: 540px;
    height: 602px;
    padding: 40px 60px;
    border-radius: 20px;
  }

  @media screen and (min-width: 768px) and (max-height: 605px) {
    align-self: flex-start;
  }
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  margin-bottom: 40px;
`;
export const Input = styled(Field)`
  border: none;
  padding: 8px;
  margin: 0 auto 80px;

  height: 30px;
  width: 100%;
  max-width: 420px;

  border-bottom: 1px solid #e0e0e0;

  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: ${theme.colors.primaryTextColor};

  :hover,
  :focus {
    outline: none;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 161px;

  @media ${device.tablet} {
    margin-top: 107px;
  }
`;
export const FormLabel = styled.label`
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
