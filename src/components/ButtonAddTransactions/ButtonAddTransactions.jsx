// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import sprite from 'images/sprite.svg';
import { Button, IconButton } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);

  // const dispatch = useDispatch();

  return (
    <Button
      type="button"
      onClick={() => {
        setIsModalAddTransactionOpen(true);
        console.log('Modal is open!!!');
      }}
    >
      <IconButton>
        <use href={sprite + '#buttonAddTransactions'} />
      </IconButton>
    </Button>
  );
};

export default ButtonAddTransactions;
