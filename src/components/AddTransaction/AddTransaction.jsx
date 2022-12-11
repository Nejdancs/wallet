import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Formik, Form } from 'formik';
import { ToastContainer } from 'react-toastify';

import operations from '../../redux/transactions/transactions-operations';

import Datetime from 'react-datetime';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datetime/css/react-datetime.css';
import './DatePiker.css';

import CloseSvg from '../../images/close.svg';
import SwitchToggle from '../AddTransaction/SwitchToggle/SwitchToggle';
import DateRange from '../../images/date-range.svg';
import Selektor from './Selektor/Selektor';
import MobileAddModal from './MobileAddModal/MobileAddModal';
import useMediaQuery from 'hooks/useMediaQuery';
import Notification from './Notification/Notification';
import Button from 'components/Button/Button';

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
} from './AddTransaction.styled';

const modalRoot = document.querySelector('#modal-root');

const AddTransaction = ({ showModal, setShowModal }) => {
  const [toggled, setToggled] = useState(false);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [typeOfOperation, setTypeOfOperation] = useState('Expense');

  const dispatch = useDispatch();

  let inputProps = { className: 'dateInput' };

  const initialValues = {
    total: 0.0,
    comment: '',
  };

  const matches = useMediaQuery('(max-width: 767px)');

  const onSelectorChange = value => {
    setCategory(value);
  };

  const changeTypeOfOperationt = value => {
    setTypeOfOperation(value);
  };

  const onSubmit = (e, { resetForm }) => {
    const value = {
      type: typeOfOperation.toLocaleLowerCase(),
      category: category,
      amount: Number(e.total),
      date: date.toLocaleDateString(),
      comment: e.comment,
    };

    if (value.total === null) {
      Notification('total');
      return;
    }
    if (value.category === '') {
      Notification('category');
      return;
    } else {
      dispatch(operations.createTransaction(value));
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
    <Layout onClick={onKeyDown}>
      {matches ? (
        <MobileAddModal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <Transaction>
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
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form autoComplete="off">
              <Selektor
                typeOfOperation={typeOfOperation}
                onChange={onSelectorChange}
                style={{ color: '#000000' }}
              />

              <InputContainer>
                <ModalInput
                  style={{ textAlign: 'center' }}
                  type="number"
                  name="total"
                  placeholder="0.00"
                />

                <Calendar>
                  <Datetime
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

              <CommentInput type="text" name="comment" placeholder="Comment" />
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
      <ToastContainer />
    </Layout>,
    modalRoot
  );
};

export default AddTransaction;
