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

const Table = ({ incomingData, totals }) => {
  return (
    <div>
      <TableHeader>
        <TableHeaderItem>Category</TableHeaderItem>
        <TableHeaderItem>Sum</TableHeaderItem>
      </TableHeader>
      {incomingData.map(trans => (
        <Transaction>
          <IconCol />
          <ItemCategory>{trans.category}</ItemCategory>
          <ItemAmount>{trans.amount}</ItemAmount>
        </Transaction>
      ))}
      <Totals>
        <TotalCategory>Expenses:</TotalCategory>
        <TotalAmountExp>{totals.expenses}</TotalAmountExp>
      </Totals>
      <Totals>
        <TotalCategory>Income:</TotalCategory>
        <TotalAmountInc>{totals.income}</TotalAmountInc>
      </Totals>
    </div>
  );
};
export default Table;
