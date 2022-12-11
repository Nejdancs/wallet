import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import getCategory from 'redux/transactions/transactions-selectors';
import operations from 'redux/transactions/transactions-operations';

import Select from 'react-select';

import './Selektor.css';

const Selektor = ({ onChange, typeOfOperation }) => {
  const { expenses = [], income = [] } = useSelector(getCategory);

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
    dispatch(operations.getCategory());
  }, [dispatch]);

  return (
    <Select
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
  );
};

export default Selektor;

Selektor.propTypes = {
  onChange: PropTypes.func,
  typeOfOperation: PropTypes.string,
};
