import Plus from '../../images/plus.svg';
import { Btn, BtnIcon } from './BtnAddCategory.styled';

const BtnAddCategory = ({ onClick }) => {
  return (
    <Btn type="button" aria-label="add category" onClick={onClick}>
      <BtnIcon src={Plus} alt="plus" />
    </Btn>
  );
};

export default BtnAddCategory;
