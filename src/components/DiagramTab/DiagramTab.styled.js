import styled from 'styled-components';
import theme from 'theme/theme';
import { Field, Form } from 'formik';

//Title
export const Title = styled.h1`
  font-family: ${theme.fontFamily.poppins};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
`;

// Chart
export const ChartContainer = styled.div`
  position: relative;
  /* width: 280px; */
  /* height: 280px; */
`;
export const DoughnutBalance = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

//FormFilter
export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled(Field)`
  height: 50px;
  border: 1px solid ${theme.colors.primaryTextColor};
  border-radius: 30px;
  gap: 20px;
`;
export const TableHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 30px;
`;
export const TableHeaderItem = styled.div`
  padding: 15px 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  /* display: flex;
  justify-content: space-between; */
`;
