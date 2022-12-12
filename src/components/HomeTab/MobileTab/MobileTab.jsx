import React, { useEffect, useMemo, useState } from 'react';
import { useSortBy, useTable } from 'react-table';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {
  MobileTable,
  Table,
  TableBody,
  TabRow,
  ColHeader,
  Column,
  CommentContainer,
  CommentColumn,
} from './MobileTab.styled';

const MobileTab = ({data,columns}) => {

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
                  <CommentColumn>
                    <Tippy content={data[i].comment} theme="light" maxWidth="100%" >
                      <CommentContainer id="tippy">{data[i].comment}</CommentContainer>
                    </Tippy>
                  </CommentColumn>
                </TabRow>
                <TabRow>
                  <ColHeader>Sum</ColHeader>
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
