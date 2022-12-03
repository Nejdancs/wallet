import styled from 'styled-components';
import theme from 'theme/theme';
import { Field, Form } from 'formik';

//Title
export const Title = styled.h1`
  margin-bottom: 8px;
  font-family: ${theme.fontFamily.poppins};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
`;

// Chart
export const ChartContainer = styled.div`
  position: relative;
  margin-bottom: 32px;

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
  margin-bottom: 20px;
  gap: 20px;
`;

export const Input = styled(Field)`
  height: 50px;
  border: 1px solid ${theme.colors.primaryTextColor};
  border-radius: 30px;
  background-color: transparent;
  gap: 20px;
`;

// Table
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
export const Transaction = styled.div`
  height: 54px;
  padding: 15px 20px;
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.13;
  align-items: center;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const IconCol = styled.span`
  height: 24px;
  width: 24px;
  margin-right: 16px;
  background-color: aliceblue;
  border-radius: 2px;
`;

export const ItemCategory = styled.span`
  margin-right: auto;
`;

export const ItemAmount = styled.span``;

export const Totals = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
`;

export const TotalCategory = styled.span``;

export const TotalAmountExp = styled.span`
  color: ${theme.colors.expenseColor};
`;
export const TotalAmountInc = styled.span`
  color: ${theme.colors.accentPrimary};
`;
