import React from 'react';
import {
  TableHeader,
  TableHeaderItem,
  Transaction,
  IconCol,
  ItemCategory,
  ItemAmount,
} from './DiagramTab.styled';

const Table = ({ incomingData }) => {
  const cardsMarkup = incomingData.map(trans => (
    <Transaction>
      <IconCol />
      <ItemCategory>{trans.category}</ItemCategory>
      <ItemAmount>{trans.amount}</ItemAmount>
    </Transaction>
  ));
  return (
    <div>
      <TableHeader>
        <TableHeaderItem>Category</TableHeaderItem>
        <TableHeaderItem>Sum</TableHeaderItem>
      </TableHeader>
      {cardsMarkup}
    </div>
  );
};
export default Table;
