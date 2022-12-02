import sprite from 'images/sprite.svg';
import { Button, IconButton } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
  return (
    <Button type="button">
      <IconButton>
        <use href={sprite + '#buttonAddTransactions'} />
      </IconButton>
    </Button>
  );
};

export default ButtonAddTransactions;
