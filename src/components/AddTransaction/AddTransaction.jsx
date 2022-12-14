import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import Datetime from 'react-datetime';
import moment from 'moment/moment';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datetime/css/react-datetime.css';
import './DatePiker.css';
import './InputNumber.css';

import addTransSchema from 'assets/ValidateSchema/addTransSchema';
import SwitchToggle from '../AddTransaction/SwitchToggle/SwitchToggle';
import DateRange from '../../images/date-range.svg';
import Selektor from './Selektor/Selektor';
import MobileAddModal from './MobileAddModal/MobileAddModal';
import useMediaQuery from 'hooks/useMediaQuery';
import Button from 'components/Button/Button';
import operations from '../../redux/transactions/transactions-operations';

import {
  Transaction,
  ModalTitle,
  ModalInput,
  InputContainer,
  CommentInput,
  Calendar,
  DateIcon,
  Label,
  ErrorText,
  Overlay,
} from './AddTransaction.styled';
import { ModalAddCategory } from 'components/ModalAddCategory/ModalAddCategory';
import useLockBodyScroll from 'hooks/useBodyLock';

const modalRoot = document.querySelector('#modal-root');

const AddTransaction = ({ showModal, setShowModal }) => {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(moment(0, 'HH'));
  const [typeOfOperation, setTypeOfOperation] = useState('Expense');
  const isLoading = useSelector(state => state.transaction.loadingAddTrans);

  const [showModalCat, setShowModalCat] = useState(false);
  useLockBodyScroll();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCategory());
  }, [dispatch, showModalCat]);

  let inputProps = { className: 'dateInput' };

  const initialValues = {
    amount: '',
    comment: '',
  };

  const matches = useMediaQuery('(max-width: 767px)');

  const onSelectorChange = value => {
    setCategory(value);
  };

  const changeTypeOfOperationt = value => {
    setTypeOfOperation(value);
  };

  const createCategoy = () => {};

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
      if (e.code !== 'Escape') return;
      if (showModalCat) return setShowModalCat(false);
      setShowModal(false);
    },
    [setShowModal, showModalCat]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [setShowModal, onKeyDown]);

  return createPortal(
    <Overlay
      onClick={e => {
        if (e.target === e.currentTarget) setShowModal(false);
      }}
    >
      {matches ? (
        <MobileAddModal
          showModal={showModal}
          setShowModal={setShowModal}
          openModalCat={() => setShowModalCat(true)}
        />
      ) : (
        <Transaction
          as={motion.div}
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          onClick={e => e.stopPropagation()}
        >
          <ModalTitle>Add transaction</ModalTitle>
          <SwitchToggle onLoad={changeTypeOfOperationt} />
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={addTransSchema}
          >
            <Form autoComplete="off">
              <Selektor
                openModalCat={() => setShowModalCat(true)}
                typeOfOperation={typeOfOperation}
                onChange={onSelectorChange}
                style={{ color: '#000000' }}
                onInputChange={createCategoy}
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
                    render={msg => <ErrorText>{msg}</ErrorText>}
                    name="amount"
                  />
                </Label>
                <Calendar>
                  <Datetime
                    isValidDate={current =>
                      moment(current).isBetween('2010-01-01', '2033-01-01')
                    }
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
                  render={msg => <ErrorText>{msg}</ErrorText>}
                  name="comment"
                />
              </Label>
              <Button disabled={isLoading} type="submit" main>
                {isLoading ? 'Loading...' : 'Add'}
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
            </Form>
          </Formik>
        </Transaction>
      )}
      {showModalCat && (
        <ModalAddCategory
          closeModal={() => setShowModalCat(false)}
          style={{ zIndex: '100' }}
        />
      )}
    </Overlay>,
    modalRoot
  );
};

export default AddTransaction;
