import React, { useMemo } from 'react';
import Media from 'react-media';
import { useSortBy, useTable } from 'react-table';
import { TAB_COLUMNS } from './TabColumns';
import { nanoid } from 'nanoid';
import css from "./HomeTab.module.css"

import BtnAddTransaction from '../ButtonAddTransactions/ButtonAddTransactions';
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

const HomeTab = () => {
  const columns = useMemo(() => TAB_COLUMNS, []);
  const data = testData;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);


  return (
    <>
      {data.length > 0 ? (
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
                                <td key={() => {nanoid();}} className={css.GreenColumn} style={row.values.type === "+" ? { color: "#24cca7" } : { color: "#ff6596" }} {...cell.getCellProps()}>
                                  {cell.render("Cell")}
                                </td>
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
      ) : (
        <NoTransactions />
      )}
      <BtnAddTransaction />
    </>
  );
};

export default HomeTab;
