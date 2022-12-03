import styled from 'styled-components';
import device from 'assets/breakpoints/device';
import { Form, Field } from 'formik';

export const FormApp = styled(Form)`
  width: 100%;

  min-width: 320px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 110px;
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background-color: ${props => props.theme.colors.primaryBg}; */

  @media ${device.tablet} {
    position: absolute;
    bottom: 110px;
    right: 50%;
    transform: translate(50%);
    width: 530px;
    border-radius: 20px;
    margin: auto;
    padding-top: 40px;
    padding-bottom: 60px;
  }

  @media ${device.desktop} {
    bottom: 50%;
    right: 85px;
    transform: translateY(50%);
    margin: 0;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 40px;
  position: relative;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  height: 32px;
  outline: none;
  padding-left: 54.5px;
  width: 100%;
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
  font-weight: 200;
  font-size: 13px;
  color: red;
`;

export const IconInput = styled.div`
  position: absolute;
  left: 10px;
  top: 4px;
`;

// export const FormField = styled(Field)`
//   border: none;
//   outline-style: none;
//   padding-left: 25px;
//   width: 250px;
//   height: 35px;

//   font-family: 'Circe';
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 27px;

//   @media ${device.desktop} {
//     width: 410px;
//   }
// `;
