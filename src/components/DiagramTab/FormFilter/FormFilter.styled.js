import styled from 'styled-components';
import { Field, Form } from 'formik';
import theme from 'theme/theme';
import arrowDown from '../../../images/arrow-down.png';
import device from 'assets/breakpoints/device';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const InpWrapper = styled.div`
  position: relative;

  @media ${device.tablet} {
    flex-basis: 50%;
  }

  &::after {
    content: '';
    z-index: 2;
    position: absolute;
    display: block;
    top: 50%;
    transform: translate(0, -50%);
    right: 21px;
    width: 18px;
    height: 9px;
    /* background-color: blue; */
    background: url(${arrowDown});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  border: 1px solid ${theme.colors.primaryTextColor};
  border-radius: 30px;
  background-color: transparent;
  /* gap: 20px; */
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
`;
