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
import Table from './Table';

function getTransactions() {
  API.getTransaction(
    'https://wallet-api-nnb3.onrender.com/api/transactions'
  ).then(res => {
    return res;
  });
}

function HomeTab() {
  const [showModal, setShowModal] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPage] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const itemsPerPage = 4;

  useEffect(() => {
    const data = testData;
    const endOffset = itemOffset + itemsPerPage;
    console.log(endOffset, 'end');
    setCurrentData(data.slice(itemOffset, endOffset));
    setPage(Math.ceil(data.length / itemsPerPage));
    console.log('useEffect accepted');
  }, [itemOffset]);

  const handlePageClick = event => {
    const data = testData;
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {currentData.length > 0 ? (
        <Table data={currentData} />
      ) : (
        <NoTransactions />
      )}
      <BtnAddTransaction onClick={openModal} />

      {showModal && <AddTransaction onClick={closeModal} />}

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

export default HomeTab;
