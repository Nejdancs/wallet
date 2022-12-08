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
} from './Table.styled';
import { numberSpace } from 'helpers';
import theme from 'theme/theme';

const Table = ({ statistics }) => {
  console.log(statistics);
  const transactions = [];
  for (let i = 0; i < statistics.expenses.length; i += 1) {
    transactions.push(
      <Transaction key={statistics.expenses[i]._id[0]._id}>
        <IconCol
          color={theme.doughnutColors[i] ?? theme.doughnutColors[i - 38]}
        />
        <ItemCategory>{statistics.expenses[i]._id[0].name}</ItemCategory>
        <ItemAmount>
          {numberSpace(statistics.expenses[i].totalAmount)}
        </ItemAmount>
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
        <TotalAmountExp>{numberSpace(statistics.totalExpenses)}</TotalAmountExp>
      </Totals>
      <Totals>
        <TotalCategory>Income:</TotalCategory>
        <TotalAmountInc>{numberSpace(statistics.totalIncome)}</TotalAmountInc>
      </Totals>
    </div>
  );
};
export default Table;
