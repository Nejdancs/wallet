import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import moment from 'moment/moment';

import * as yup from 'yup';

import Datetime from 'react-datetime';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datetime/css/react-datetime.css';
import './DatePiker.css';
import './InputNumber.css';

import CloseSvg from '../../images/close.svg';
import SwitchToggle from '../AddTransaction/SwitchToggle/SwitchToggle';
import DateRange from '../../images/date-range.svg';
import Selektor from './Selektor/Selektor';
import MobileAddModal from './MobileAddModal/MobileAddModal';
import useMediaQuery from 'hooks/useMediaQuery';
import Button from 'components/Button/Button';
import operations from '../../redux/transactions/transactions-operations';

import {
  Layout,
  Transaction,
  ModalTitle,
  CloseBtn,
  ModalInput,
  InputContainer,
  BtnList,
  CommentInput,
  Calendar,
  DateIcon,
  CloseIcon,
  Label,
} from './AddTransaction.styled';

let Schema = yup.object().shape({
  amount: yup
    .number()
    .required('It`s a required field')
    .moreThan(0, 'Enter a number greater than 0')
    .positive('Must be a positiv number'),
  comment: yup.string().max(100, 'No more than 100 characters'),
});

const modalRoot = document.querySelector('#modal-root');

const AddTransaction = ({ showModal, setShowModal }) => {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [typeOfOperation, setTypeOfOperation] = useState('Expense');

  const dispatch = useDispatch();

  let inputProps = { className: 'dateInput' };

  const initialValues = {
    amount: '',
    comment: '',
  };

  const matches = useMediaQuery('(max-width: 767px)');

  const yesterday = moment().subtract(10, 'years');

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

      if (res.error && res.payload.status === 400) {
        toast.error(res.payload.message);
        return;
      } else if (res.error) {
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
    <Layout
      onClick={
        (onKeyDown,
        () => {
          setShowModal(false);
        })
      }
    >
      {matches ? (
        <MobileAddModal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <Transaction onClick={e => e.stopPropagation()}>
          <ModalTitle>Add transaction</ModalTitle>
          <CloseBtn
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <CloseIcon src={CloseSvg} alt="close" />
          </CloseBtn>
          <SwitchToggle onLoad={changeTypeOfOperationt} />
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={Schema}
          >
            <Form autoComplete="off">
              <Selektor
                typeOfOperation={typeOfOperation}
                onChange={onSelectorChange}
                style={{ color: '#000000' }}
              />

              <InputContainer>
                <Label htmlFor="amount">
                  <ModalInput
                    style={{ textAlign: 'left' }}
                    type="number"
                    name="amount"
                    placeholder="0.00"
                  />
                  <ErrorMessage
                    style={{
                      color: 'red',
                      position: 'absolute',
                      top: '30px',
                    }}
                    component="div"
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
              </InputContainer>
              <Label htmlFor="comment">
                <CommentInput
                  type="text"
                  name="comment"
                  placeholder="Comment"
                />
                <ErrorMessage
                  style={{ color: 'red', position: 'absolute', top: '30px' }}
                  component="div"
                  name="comment"
                />
              </Label>

              <BtnList>
                <Button type="submit">Add</Button>
                <Button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
              </BtnList>
            </Form>
          </Formik>
        </Transaction>
      )}
    </Layout>,
    modalRoot
  );
};

export default AddTransaction;
