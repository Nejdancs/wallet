import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

import {
  ModalContainer,
  CloseBtn,
  CloseIcon,
  Text,
  BtnContainer,
  ConfirmBtn,
  CancelBtn,
  Overlay,
  Modal,
} from './ModalLogout.styled';
import close from 'images/close.svg';

const ModalLogout = ({ setModalOpen }) => {
  const modalRoot = document.querySelector('#modal-root');
  const dispatch = useDispatch();

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
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, setModalOpen]);

  return createPortal(
    <Overlay onClick={handleKeyDown}>
      <Modal>
        <ModalContainer>
          <CloseBtn
            type="button"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <CloseIcon src={close} />
          </CloseBtn>
          <Text> Ви впевнені, що хочете вийти?</Text>
          <BtnContainer>
            <ConfirmBtn type="button" onClick={handleClick}>
              Так
            </ConfirmBtn>
            <CancelBtn
              type="button"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Ні
            </CancelBtn>
          </BtnContainer>
        </ModalContainer>
      </Modal>
    </Overlay>,
    modalRoot
  );
};
export default ModalLogout;
