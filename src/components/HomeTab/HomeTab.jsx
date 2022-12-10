import React, {useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import BtnAddTransaction from '../ButtonAddTransactions/ButtonAddTransactions';
import AddTransaction from 'components/AddTransaction/AddTransaction';
import { testData } from './testData';
import NoTransactions from './NoTransactions/NoTransactions';
import css from './Pagination.module.css';

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
    const data = [...testData];
    const endOffset = itemOffset + itemsPerPage;
    setCurrentData(data.slice(itemOffset, endOffset));
    setPage(Math.ceil(data.length / itemsPerPage));
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
    <div className='HomeDiv'>
      {currentData.length > 0 ? (
        <Table data={currentData} />
      ) : (
        <NoTransactions />
      )}
      <BtnAddTransaction onClick={openModal} />

      {showModal && <AddTransaction onClick={closeModal} />}

      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName={css.pageItem}
        pageLinkClassName={css.pageLink}
        previousClassName={css.pageItem}
        previousLinkClassName={css.pageLink}
        nextClassName={css.pageItem}
        nextLinkClassName={css.pageLink}
        breakLabel="..."
        breakClassName={css.pageItem}
        breakLinkClassName={css.pageLink}
        containerClassName={css.pagination}
        activeClassName={css.active}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default HomeTab;
