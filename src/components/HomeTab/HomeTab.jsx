import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import BtnAddTransaction from '../ButtonAddTransactions/ButtonAddTransactions';
import AddTransaction from 'components/AddTransaction/AddTransaction';
import NoTransactions from './NoTransactions/NoTransactions';

import Table from './Table';
import operations from 'redux/transactions/transactions-operations';
import { HomeTabContainer } from './HomeTab.styled';
import SkeletonTab from 'components/Loader/SkeletonTab';
import SkeletonTabMobile from 'components/Loader/SkeletonTabMobile';
import Media from 'react-media';

function HomeTab() {
  const [showModal, setShowModal] = useState(false);
  const currentData = useSelector(state => state.transaction.transactions);
  const isLoading = useSelector(state => state.transaction.loadingTrans);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getTransactions());
  }, [dispatch]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <HomeTabContainer>
        {isLoading ? (
          <Media
            queries={{
              small: '(max-width: 767px)',
            }}
          >
            {matches =>
              matches.small ? <SkeletonTabMobile /> : <SkeletonTab />
            }
          </Media>
        ) : currentData.length > 0 ? (
          <Table data={currentData} />
        ) : (
          <NoTransactions />
        )}

        {!showModal && (
          <BtnAddTransaction showModal={showModal} onClick={openModal} />
        )}

        <AnimatePresence>
          {showModal && (
            <AddTransaction showModal={showModal} setShowModal={setShowModal} />
          )}
        </AnimatePresence>
      </HomeTabContainer>
    </>
  );
}

export default HomeTab;
