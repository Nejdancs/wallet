import styled from 'styled-components';
import theme from 'theme/theme';
import { Field, Form } from 'formik';
import arrowDown from '../../images/arrow-down.png';
import device from 'assets/breakpoints/device';

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    min-width: 692px;
    flex-direction: row;
    gap: 32px;
  }
  @media ${device.desktop} {
    min-width: 715px;
  }
`;

export const Column = styled.div`
  &:nth-child(1) {
    @media ${device.tablet} {
      flex-basis: 50%;
    }
    @media ${device.desktop} {
      flex-basis: 40%;
    }
  }
`;

//Title
export const Title = styled.h1`
  margin-bottom: 8px;
  font-family: ${theme.fontFamily.poppins};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  @media ${device.desktop} {
    margin-left: 15px;
  }
`;

// Chart
export const ChartContainer = styled.div`
  position: relative;
  margin-bottom: 32px;

  /* @media ${device.tablet} {
    width: 336px;
    height: 336px;
  }
  @media ${device.desktop} {
    width: 288px;
    height: 288px;
  } */
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

export const Select = styled.select`
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  border: 1px solid ${theme.colors.primaryTextColor};
  border-radius: 30px;
  background-color: transparent;
  gap: 20px;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

export const InpWrapper = styled.div`
  position: relative;
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
  background-color: ${props => (props.color ? props.color : 'grey')};
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
