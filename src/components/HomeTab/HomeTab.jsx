import React, { useMemo, useState, useEffect } from 'react';
import BtnAddTransaction from '../ButtonAddTransactions/ButtonAddTransactions';
import AddTransaction from 'components/AddTransaction/AddTransaction';
import NoTransactions from './NoTransactions/NoTransactions';

import API from 'services/api/api';
import Table from './Table';

function HomeTab() {
  const [showModal, setShowModal] = useState(false);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const fetchTransaction = async () => {
      const { data } = await API.getTransaction();
      setCurrentData(data);
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

      {showModal && (
        <AddTransaction showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}

export default HomeTab;
