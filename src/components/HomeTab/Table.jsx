import React, { useMemo, useState, useEffect } from 'react';
import Media from 'react-media';
import { useSortBy, useTable } from 'react-table';
import { TAB_COLUMNS } from './TabColumns';
import { nanoid } from 'nanoid';
import ReactPaginate from 'react-paginate';

import BtnAddTransaction from '../ButtonAddTransactions/ButtonAddTransactions';
import AddTransaction from 'components/AddTransaction/AddTransaction';
import { testData } from './testData';
import MobileTab from './MobileTab/MobileTab';
import NoTransactions from './NoTransactions/NoTransactions';

import {
  HomeTabContainer,
  HomeTable,
  HomeTabHeader,
  ColumnHeader,
  HomeTr,
  HomeTabColumn,
} from './HomeTab.styled';
import API from 'services/api/api';

function getTransactions() {
  API.getTransaction(
    'https://wallet-api-nnb3.onrender.com/api/transactions'
  ).then(res => {
    return res;
  });
}

function Table({ data }) {
  const columns = useMemo(() => TAB_COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <Media
        queries={{
          mobile: '(min-width: 768px)',
        }}
      >
        {({ mobile }) => (
          <HomeTabContainer>
            {!mobile ? (
              <MobileTab />
            ) : (
              <HomeTable {...getTableProps()}>
                <HomeTabHeader>
                  {headerGroups.map(headerGroup => (
                    <tr
                      key={() => {
                        nanoid();
                      }}
                      {...headerGroup.getHeaderGroupProps()}
                    >
                      {headerGroup.headers.map(column => (
                        <ColumnHeader
                          key={() => {
                            nanoid();
                          }}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render('Header')}
                        </ColumnHeader>
                      ))}
                    </tr>
                  ))}
                </HomeTabHeader>

                <tbody {...getTableBodyProps()}>
                  {rows.map(row => {
                    prepareRow(row);
                    return (
                      <HomeTr
                        key={() => {
                          nanoid();
                        }}
                        {...row.getRowProps()}
                      >
                        {row.cells.map(cell => {
                          return (
                            <HomeTabColumn
                              key={() => {
                                nanoid();
                              }}
                              style={
                                row.values.type === '+'
                                  ? { color: '#24cca7' }
                                  : { color: '#ff6596' }
                              }
                              {...cell.getCellProps()}
                            >
                              {cell.render('Cell')}
                            </HomeTabColumn>
                          );
                        })}
                      </HomeTr>
                    );
                  })}
                </tbody>
              </HomeTable>
            )}
          </HomeTabContainer>
        )}
      </Media>
    </>
  );
}

export default Table;
