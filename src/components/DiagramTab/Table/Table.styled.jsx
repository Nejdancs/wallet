import styled from 'styled-components';
import theme from 'theme/theme';

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
