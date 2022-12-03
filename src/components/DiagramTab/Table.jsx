import React from 'react';
import {
  TableHeader,
  TableHeaderItem,
  Transaction,
  IconCol,
  ItemCategory,
  ItemAmount,
  Totals,
  TotalCategory,
  TotalAmountExp,
  TotalAmountInc,
} from './DiagramTab.styled';
import { numberSpace } from 'helpers';
import theme from 'theme/theme';

const Table = ({ incomingData, totals }) => {
  const transactions = [];
  for (let i = 0; i < incomingData.length; i += 1) {
    transactions.push(
      <Transaction key={incomingData[i]._id}>
        <IconCol color={theme.doughnutColors[i]} />
        <ItemCategory>{incomingData[i].category}</ItemCategory>
        <ItemAmount>{numberSpace(incomingData[i].amount)}</ItemAmount>
      </Transaction>
    );
  }

  return (
    <div>
      <TableHeader>
        <TableHeaderItem>Category</TableHeaderItem>
        <TableHeaderItem>Sum</TableHeaderItem>
      </TableHeader>
      {transactions}
      <Totals>
        <TotalCategory>Expenses:</TotalCategory>
        <TotalAmountExp>{numberSpace(totals.expenses)}</TotalAmountExp>
      </Totals>
      <Totals>
        <TotalCategory>Income:</TotalCategory>
        <TotalAmountInc>{numberSpace(totals.income)}</TotalAmountInc>
      </Totals>
    </div>
  );
};
export default Table;
