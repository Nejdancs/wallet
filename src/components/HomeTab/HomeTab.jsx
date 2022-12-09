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

function PaginatedTab({ itemsPerPage }) {
  const [showModal, setShowModal] = useState(false);
  const data = testData;
  console.log(data, 'data');
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPage] = useState(0);
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    const data = testData;
    const endOffset = itemOffset + itemsPerPage;
    console.log(endOffset, 'end');
    setCurrentData(data.slice(itemOffset, endOffset));
    setPage(Math.ceil(data.length / itemsPerPage));
    console.log('useEffect accepted');
  }, [itemOffset, itemsPerPage]);

  console.log(currentData, 'current');
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePageClick = event => {
    const data = testData;
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const columns = useMemo(() => TAB_COLUMNS, []);
  const memoData = useMemo(() => currentData, [currentData]);
  console.log(memoData, 'memoData');

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, memoData }, useSortBy);

  console.log(currentData);
  return (
    <>
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
        ) : (
          <NoTransactions />
        )}
        <BtnAddTransaction onClick={openModal} />

        {showModal && <AddTransaction onClick={closeModal} />}
      </>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedTab;
