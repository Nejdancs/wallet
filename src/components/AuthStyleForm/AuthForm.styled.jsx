import styled from 'styled-components';
import device from 'assets/breakpoints/device';
import { Field } from 'formik';
import { ReactComponent as name } from '../../images/name.svg';
import { ReactComponent as email } from '../../images/email.svg';
import { ReactComponent as password } from '../../images/password.svg';

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media ${device.mobile} {
    width: 480px;
    height: auto;
    border-radius: 20px;
  }

  @media ${device.tablet} {
    width: 533px;
    padding: 40px 58.5px 62px 65px;
    background-color: ${props => props.theme.colors.secondaryBg};
  }
`;
export const Form = styled.form`
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

export const IconPassword = styled(password)`
  position: absolute;
  left: 10px;
  top: 4px;
  fill: ${p => p.theme.colors.fillIcons};
  transition: fill 200ms linear;
`;

export const IconMail = styled(email)`
  position: absolute;
  left: 10px;
  top: 4px;
  fill: ${p => p.theme.colors.fillIcons};
  transition: fill 200ms linear;
`;

export const IconName = styled(name)`
  position: absolute;
  left: 10px;
  top: 4px;
  fill: ${p => p.theme.colors.fillIcons};
  transition: fill 200ms linear;
`;

export const FormField = styled(Field)`
  border: none;
  border-bottom: 1px solid ${p => p.theme.colors.fillIcons};
  height: 32px;
  outline: none;
  padding-left: 54.5px;
  width: 100%;
  color: #000000;

  &:-webkit-autofill {
    box-shadow: inset 0 0 0 100px #ffffff;
    -webkit-text-fill-color: #000000;
  }

  &:focus + ${IconPassword}, &:focus + ${IconMail}, &:focus + ${IconName} {
    fill: ${p => p.theme.colors.accentPrimary};
  }
  ::placeholder {
    color: ${p => p.theme.colors.fillIcons};
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

export const ErrorText = styled.p`
  position: absolute;
  top: 42px;
  left: 5px;
  font-size: 12px;
  line-height: 1.14;
  color: rgb(240, 0, 0);
`;

export const ErrorTextConfirm = styled(ErrorText)`
  @media screen and (max-width: 350px) {
    width: 135px;
  }
`;
