import { useDispatch } from 'react-redux';
import sprite from 'images/sprite.svg';
import { Button, IconButton } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" /* onClick={() => dispatch(openModal(true))} */>
      <IconButton>
        <use href={sprite + '#buttonAddTransactions'} />
      </IconButton>
    </Button>
  );
};

export default ButtonAddTransactions;
