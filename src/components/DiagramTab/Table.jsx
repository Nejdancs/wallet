import React from 'react';
import { TableHeader, TableHeaderItem } from './DiagramTab.styled';

const Table = ({ incomingData }) => {
  const cardsMarkup = incomingData.map(trans => (
    <div>
      <span>col</span>
      <span>{trans.category}</span>
      <span>{trans.amount}</span>
    </div>
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
