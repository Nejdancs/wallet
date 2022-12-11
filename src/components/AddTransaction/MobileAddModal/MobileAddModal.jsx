import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Formik, Form } from 'formik';

import { useDispatch } from 'react-redux';

import Datetime from 'react-datetime';

import operations from 'redux/transactions/transactions-operations';

import 'react-datetime/css/react-datetime.css';
import '../DatePiker.css';

import CloseSvg from '../../../images/close.svg';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import DateRange from '../../../images/date-range.svg';
import Selektor from '../Selektor/Selektor';
import Notification from '../Notification/Notification';
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
} from './MobileAddModal.styled';

const modalRoot = document.querySelector('#modal-root');

const MobileAddModal = ({ showModal, setShowModal }) => {
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

    if (value.total === '') {
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
      <Transaction>
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

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form autoComplete="off">
            <Selektor onChange={onSelectorChange} />

            <div>
              <ModalInput type="text" name="total" placeholder="0.00" />
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
            </div>

            <CommentInput type="text" name="comment" placeholder="Comment" />
            <BtnList>
              <li>
                <Button type="submit">Add</Button>
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
      </Transaction>
    </Layout>,
    modalRoot
  );
};

export default MobileAddModal;
