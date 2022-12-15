import { useState, useEffect, useCallback } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

import Datetime from 'react-datetime';
import operations from 'redux/transactions/transactions-operations';

import 'react-datetime/css/react-datetime.css';
import '../DatePiker.css';
import '../InputNumber.css';
import Container from 'components/Container/Container';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import DateRange from '../../../images/date-range.svg';
import Selektor from '../Selektor/Selektor';
import Button from 'components/Button/Button';
import addTransSchema from 'assets/ValidateSchema/addTransSchema';
import {
  Transaction,
  ModalTitle,
  ModalInput,
  CommentInput,
  Calendar,
  DateIcon,
  Label,
  ErrorText,
} from './MobileAddModal.styled';

const MobileAddModal = ({ showModal, setShowModal, openModalCat }) => {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [typeOfOperation, setTypeOfOperation] = useState('Expense');
  const isLoading = useSelector(state => state.transaction.loadingAddTrans);

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

  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <Transaction onClick={e => e.stopPropagation()}>
        <Container>
          <ModalTitle>Add transaction</ModalTitle>
          <SwitchToggle onLoad={changeTypeOfOperationt} />
          <Formik
            validationSchema={addTransSchema}
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
              </div>
              <Label htmlFor="comment">
                <CommentInput
                  type="text"
                  name="comment"
                  placeholder="Comment"
                />
                <ErrorMessage
                  render={msg => (
                    <ErrorText style={{ top: '36px' }}>{msg}</ErrorText>
                  )}
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
        </Container>
      </Transaction>
    </motion.div>
  );
};

export default MobileAddModal;

MobileAddModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
