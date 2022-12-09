// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import sprite from 'images/sprite.svg';
import { Button, IconButton } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = ({ onClick }) => {
  // const dispatch = useDispatch();

  return (
    // <Button type="button" onClick={setModalOpen(true)}>
    <Button type="button" onClick={onClick}>
      <IconButton>
        <use href={sprite + '#buttonAddTransactions'} />
      </IconButton>
    </Button>
  );
};

export default ButtonAddTransactions;
