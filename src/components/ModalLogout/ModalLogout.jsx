import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import Button from 'components/Button/Button';
import { CloseBtn } from 'components/AddTransaction/AddTransaction.styled';
import CloseSvg from '../../images/close.svg';
import {
  ModalContainer,
  Text,
  BtnContainer,
  Overlay,
  Modal,
} from './ModalLogout.styled';
import useLockBodyScroll from 'hooks/useBodyLock';

const ModalLogout = ({ setModalOpen }) => {
  const modalRoot = document.querySelector('#modal-root');
  const dispatch = useDispatch();
  useLockBodyScroll();
  const handleClick = () => {
    dispatch(authOperations.logOut());
    setModalOpen(false);
  };

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        setModalOpen(false);
      }
      if (e.target === e.currentTarget) {
        setModalOpen(false);
      }
    },
    [setModalOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, setModalOpen]);

  return createPortal(
    <Overlay onClick={handleKeyDown}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Modal>
          <ModalContainer>
            <CloseBtn>
              <img
                src={CloseSvg}
                alt="close"
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </CloseBtn>
            <Text>Do you really want to leave?</Text>
            <BtnContainer>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
              >
                <Button main type="button" onClick={handleClick}>
                  Yes
                </Button>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
              >
                <Button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  No
                </Button>
              </motion.div>
            </BtnContainer>
          </ModalContainer>
        </Modal>
      </motion.div>
    </Overlay>,
    modalRoot
  );
};
export default ModalLogout;
