import IconPlus from '../../images/plus.svg';
import { Button, Icon } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <Icon src={IconPlus} alt="plus" />
    </Button>
  );
};

export default ButtonAddTransactions;
