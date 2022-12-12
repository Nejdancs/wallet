import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

import Datetime from 'react-datetime';
import operations from 'redux/transactions/transactions-operations';

import * as yup from 'yup';

import 'react-datetime/css/react-datetime.css';
import '../DatePiker.css';
import '../InputNumber.css';

import CloseSvg from '../../../images/close.svg';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import DateRange from '../../../images/date-range.svg';
import Selektor from '../Selektor/Selektor';
import Button from 'components/Button/Button';

import {
  Layout,
  Transaction,
  ModalTitle,
  CloseBtn,
  ModalInput,
  BtnList,
  CommentInput,
  Calendar,
  DateIcon,
  Label,
  ErrorText,
} from './MobileAddModal.styled';

const modalRoot = document.querySelector('#modal-root');

let Schema = yup.object().shape({
  amount: yup
    .number()
    .required('It`s a required field')
    .moreThan(0, 'Enter a number greater than 0')
    .positive('Must be a positiv number'),
  comment: yup.string().max(100, 'No more than 100 characters'),
});

const MobileAddModal = ({ showModal, setShowModal, openModalCat }) => {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [typeOfOperation, setTypeOfOperation] = useState('Expense');

  const dispatch = useDispatch();

  const yesterday = moment().subtract(10, 'years');

  let inputProps = { className: 'dateInput' };

  const initialValues = {
    amount: '',
    comment: '',
  };

  const onSelectorChange = value => {
    setCategory(value);
  };

  const changeTypeOfOperationt = value => {
    setTypeOfOperation(value);
  };

  const onSubmit = async (e, { resetForm }) => {
    const value = {
      type: typeOfOperation.toLocaleLowerCase(),
      category: category,
      amount: Number(e.amount),
      date,
      comment: e.comment,
    };

    if (value.amount === 0) {
      toast.error('Please enter the transaction amount!!');
      return;
    }
    if (value.category === '') {
      toast.error('Please select a category !!');
      return;
    } else {
      const res = await dispatch(operations.createTransaction(value));
      console.log(res.payload);
      if (res.error && res.payload.status === 400) {
        toast.error(res.payload.message);
        console.log('two');
        return;
      } else if (res.error) {
        console.log('first');

        toast.error('Something went wrong! Please, try again');
        return;
      }
      toast.success('Transaction created successfully');
    }

    resetForm();
    setShowModal(false);
  };

  const onKeyDown = useCallback(
    e => {
      if (e.code === 'Escape' ?? e.target === e.currentTarget) {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [setShowModal, onKeyDown]);

  return createPortal(
    // <Layout
    //   onClick={
    //     (onKeyDown,
    //     () => {
    //       setShowModal(false);
    //     })
    //   }
    // >
    <Transaction onClick={e => e.stopPropagation()}>
      <ModalTitle>Add transaction</ModalTitle>

      <CloseBtn
        type="button"
        onClick={() => {
          setShowModal(false);
        }}
      >
        <img src={CloseSvg} alt="close" />
      </CloseBtn>

      <SwitchToggle onLoad={changeTypeOfOperationt} />

      <Formik
        validationSchema={Schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off">
          <Selektor
            openModalCat={openModalCat}
            typeOfOperation={typeOfOperation}
            onChange={onSelectorChange}
          />

          <div>
            <Label htmlFor="amount">
              <ModalInput
                style={{ textAlign: 'left' }}
                type="number"
                name="amount"
                placeholder="0.00"
              />
              <ErrorMessage
                    render={msg => <ErrorText>{msg}</ErrorText>}
                    name="amount"
                  />
            </Label>
            <Calendar>
              <Datetime
                isValidDate={current => current.isAfter(yesterday)}
                timeFormat={false}
                initialValue={date}
                closeOnSelect={true}
                dateFormat="DD.MM.YYYY"
                inputProps={inputProps}
                onChange={e => setDate(e._d)}
              />
              <DateIcon src={DateRange} alt="calendar" />
            </Calendar>
          </div>

          <Label htmlFor="comment">
            <CommentInput type="text" name="comment" placeholder="Comment" />
            <ErrorMessage
                    render={msg => <ErrorText style={{ top: '36px' }}>{msg}</ErrorText>}
                    name="comment"
                  />
          </Label>
          <BtnList>
            <li>
              <Button type="submit" main>
                Add
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
            </li>
          </BtnList>
        </Form>
      </Formik>
    </Transaction>,
    // </Layout>,
    modalRoot
  );
};

export default MobileAddModal;

MobileAddModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
