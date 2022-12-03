import styled from 'styled-components';
import device from 'assets/breakpoints/device';
import { Form, Field } from 'formik';
import { ReactComponent as startLogo } from '../../images/start-logo.svg';
import { ReactComponent as email } from '../../images/email.svg';
import { ReactComponent as password } from '../../images/password.svg';

export const FormContainer = styled.div`
  min-width: 320px;
  max-width: 480px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  border: 1px solid black;

  @media ${device.tablet} {
    max-width: none;
    width: 533px;

    padding: 40px 58.5px 62px 65px;
    background-color: ${props => props.theme.colors.secondaryBg};

    border-radius: 20px;
  }
`;
export const FormApp = styled(Form)`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 40px;
  position: relative;
`;

export const FormField = styled(Field)`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  height: 32px;
  outline: none;
  padding-left: 54.5px;
  width: 100%;
  ::placeholder {
    color: #e0e0e0;
  }
  @media ${device.desktop} {
    width: 410px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const LogoM = styled(startLogo)`
  background-color: transparent;
`;

export const ErrorText = styled.p`
  font-weight: 200;
  font-size: 13px;
  color: red;
`;

export const IconMail = styled(email)`
  position: absolute;
  left: 10px;
  top: 4px;
`;
export const IconPassword = styled(password)`
  position: absolute;
  left: 10px;
  top: 4px;
`;
