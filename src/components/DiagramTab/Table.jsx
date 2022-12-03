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

const Table = ({ incomingData, totals }) => {
  return (
    <div>
      <TableHeader>
        <TableHeaderItem>Category</TableHeaderItem>
        <TableHeaderItem>Sum</TableHeaderItem>
      </TableHeader>
      {incomingData.map(trans => (
        <Transaction key={trans._id}>
          <IconCol />
          <ItemCategory>{trans.category}</ItemCategory>
          <ItemAmount>{numberSpace(trans.amount)}</ItemAmount>
        </Transaction>
      ))}
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
