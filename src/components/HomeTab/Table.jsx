import React, { useMemo, useState, useEffect } from 'react';
import Media from 'react-media';
import { useSortBy, useTable, usePagination } from 'react-table';
import { TAB_COLUMNS } from './TabColumns';
import { nanoid } from 'nanoid';

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

const pageSizeOptions = [5, 10, 15, 20];

function Table({ data }) {
  const columns = useMemo(() => TAB_COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    pageOptions,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable(
    { columns, data, initialState: { pageSize: 5 } },
    useSortBy,
    usePagination
  );

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
              <>
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
                    {page.map(row => {
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
                <div>
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    Previous Page
                  </button>
                  <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next Page
                  </button>
                  <div>
                    Page{' '}
                    <em>
                      {pageIndex + 1} of {pageOptions.length}
                    </em>
                  </div>
                  <div>Go to page:</div>
                  <input
                    type="number"
                    defaultValue={pageIndex + 1 || 1}
                    onChange={e => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(page);
                    }}
                  />
                  <select
                    value={pageSize}
                    onChange={e => {
                      setPageSize(Number(e.target.value));
                    }}
                  >
                    {pageSizeOptions.map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </HomeTabContainer>
        )}
      </Media>
    </>
  );
}

export default Table;
