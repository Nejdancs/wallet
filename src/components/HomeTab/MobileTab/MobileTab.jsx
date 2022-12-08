import React, { useEffect, useMemo } from 'react';
import { useSortBy, useTable } from 'react-table';
import { testData } from '../testData';
import { TAB_COLUMNS } from '../TabColumns';
import {
  MobileTable,
  Table,
  TableBody,
  TabRow,
  ColHeader,
  Column,
  ColHeaderDef,
  ColumnDef,
} from './MobileTab.styled';

const MobileTab = () => {
  const columns = useMemo(() => TAB_COLUMNS, []);
  const data = testData;
  const { getTableProps, getTableBodyProps, rows } = useTable(
    { columns, data },
    useSortBy
  );

  return (
    <>
      <MobileTable>
        {rows.map((row, i) => {
          return (
            <Table key={i} {...getTableProps()}>
              <TableBody
                type={data[i].type}
                key={row.id}
                {...getTableBodyProps()}
              >
                <TabRow>
                  <ColHeader>Date</ColHeader>
                  <Column>{data[i].date}</Column>
                </TabRow>
                <TabRow>
                  <ColHeader>Type</ColHeader>
                  <Column>{data[i].type}</Column>
                </TabRow>
                <TabRow>
                  <ColHeader>Category</ColHeader>
                  <Column>{data[i].category}</Column>
                </TabRow>
                <TabRow>
                  <ColHeader>Comment</ColHeader>
                  <Column>{data[i].comment}</Column>
                </TabRow>
                <TabRow>
                  <ColHeader>Amount</ColHeader>
                  <Column
                    style={
                      data[i].type === '+'
                        ? { color: '#24cca7' }
                        : { color: '#ff6596' }
                    }
                  >
                    {data[i].amount}
                  </Column>
                </TabRow>
                <TabRow>
                  <ColHeader>Balance</ColHeader>
                  <Column>{data[i].balance}</Column>
                </TabRow>
              </TableBody>
            </Table>
          );
        })}
      </MobileTable>
    </>
  );
};

export default MobileTab;
