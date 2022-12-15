import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import BtnAddCategory from 'components/BtnAddCategory/BtnAddCategory';
import getCategory from 'redux/transactions/transactions-selectors';
import operations from 'redux/transactions/transactions-operations';
import './Selektor.css';

const Selektor = ({ onChange, typeOfOperation, openModalCat }) => {
  const { expenses = [], income = [] } = useSelector(getCategory);
  const isLoadingCategory = useSelector(state => state.transaction.loadingCat);
  const selectInputRef = useRef();

  let expen = expenses.map(({ _id, name }) => ({
    value: _id,
    label: name,
  }));
  let inc = income.map(({ _id, name }) => ({
    value: _id,
    label: name,
  }));

  const dispatch = useDispatch();

  const onSelectorChange = e => {
    onChange(e.value);
  };

  useEffect(() => {
    console.log(selectInputRef.current);
  }, [typeOfOperation]);

  useEffect(() => {
    dispatch(operations.getCategory());
  }, [dispatch]);

  return (
    <div className="select-container">
      <Select
        ref={selectInputRef}
        isLoading={isLoadingCategory}
        options={typeOfOperation === 'Expense' ? expen : inc}
        typeOfOperation={typeOfOperation}
        onChange={onSelectorChange}
        unstyled={true}
        classNamePrefix="custom-select"
        placeholder="Select a category"
        styles={{
          option: (baseStyle, state) => ({
            ...baseStyle,
            color: state.isFocused ? '#ff6596' : 'black',
            background: state.isFocused ? '#ffffff' : '',
          }),
        }}
      />
      <BtnAddCategory onClick={openModalCat} />
    </div>
  );
};

export default Selektor;

Selektor.propTypes = {
  onChange: PropTypes.func,
  typeOfOperation: PropTypes.string,
};
