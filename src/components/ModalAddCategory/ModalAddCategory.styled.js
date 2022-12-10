import styled from 'styled-components';
import { Field } from 'formik';
import device from 'assets/breakpoints/device';
import theme from 'theme/theme';

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 10px 40px;
  text-align: center;
  z-index: 2;
  background-color: #fff;

  @media ${device.tablet} {
    width: 540px;
    height: 508px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 80px;
    border-radius: 20px;
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
  max-width: 380px;

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
