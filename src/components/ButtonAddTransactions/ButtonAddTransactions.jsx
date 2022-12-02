import buttonAddTransactions from 'images/buttonAddTransactions.svg';
import { Button, IconButton } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
  return (
    <Button type="button">
      <IconButton>
        <use href={buttonAddTransactions}></use>
      </IconButton>
    </Button>
  );
};

export default ButtonAddTransactions;
