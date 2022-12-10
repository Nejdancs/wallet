import React, { useMemo, useState, useEffect } from 'react';
import Media from 'react-media';
import { useSortBy, useTable } from 'react-table';
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
import API from 'services/api/api';
import Table from './Table';

function HomeTab() {
  const [showModal, setShowModal] = useState(false);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const fetchTransaction = async () => {
      // const { data } = await API.getTransaction(1, 1000);

      // setCurrentData(data.result);

      setCurrentData(testData);
    };

    fetchTransaction();
  }, []);

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
    </>
  );
}

export default HomeTab;
