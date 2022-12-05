// import { useDispatch } from 'react-redux';
import sprite from 'images/sprite.svg';
import { Button, IconButton } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = ({ setModalOpen }) => {
  // const dispatch = useDispatch();

  return (
    // <Button type="button" onClick={setModalOpen(true)}>
    <Button type="button" onClick={() => {}}>
      <IconButton>
        <use href={sprite + '#buttonAddTransactions'} />
      </IconButton>
    </Button>
  );
};

export default ButtonAddTransactions;
