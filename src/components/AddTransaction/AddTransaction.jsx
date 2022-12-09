import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Formik, Form, Field } from 'formik';
import Media from 'react-media';
import * as yup from 'yup';

import CloseSvg from '../../images/close.svg';
import SwitchToggle from '../AddTransaction/SwitchToggle/SwitchToggle';
import DateRange from '../../images/date-range.svg';
import DatePiker from './DatePiker/DatePiker';
import Selektor from './Selektor/Selektor';

import {
  Layout,
  Transaction,
  ModalTitle,
  CloseBtn,
  ModalInput,
  ActionBtn,
  InputContainer,
  BtnList,
  CommentInput,
  Calendar,
  DateIcon,
  Selector,
  SelectOption,
  InpSelector,
} from './addTransaction.styled';

const modalRoot = document.querySelector('#modal-root');

const initialValues = {
  category: '',
  total: '',
  date: '',
  comment: '',
};

const schema = yup.object().shape({
  category: yup.string().required(),
  total: yup.string().required(),
  date: yup.string().required(),
});

const AddTransaction = ({ onClick }) => {
  const [toggled, setToggled] = useState(false);
  const [category, setCategory] = useState('');

  const optionsArr = [
    'Main',
    'Food',
    'Auto',
    'Development',
    'Children',
    'House',
    'Education',
    'Reset',
  ];

  const options = optionsArr.map((el, index) => {
    return <SelectOption key={index}>{el}</SelectOption>;
  });

  const changeSelect = e => {
    setCategory(e.target.value);
  };

  const handleChange = toggled => {
    setToggled(toggled);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return createPortal(
    <Layout>
      <Transaction>
        <ModalTitle>Add transaction</ModalTitle>

        <CloseBtn type="button" onClick={onClick}>
          <img src={CloseSvg} alt="close" />
        </CloseBtn>

        <SwitchToggle onChange={handleChange} />

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            {!toggled && <Field as={Selektor} />}

            <InputContainer>
              <ModalInput
                // style={{ textAlign: 'center' }}
                type="text"
                name="total"
                placeholder="0.00"
              />
              <Calendar>
                <ModalInput type="date" name="date" as={DatePiker} />
                <DateIcon src={DateRange} alt="calendar" />
              </Calendar>
            </InputContainer>

            <CommentInput type="text" name="comment" placeholder="Comment" />
            <BtnList>
              <li>
                <ActionBtn type="submit">Add</ActionBtn>
              </li>
              <li>
                <ActionBtn type="button">Cancel</ActionBtn>
              </li>
            </BtnList>
          </Form>
        </Formik>
      </Transaction>
    </Layout>,
    modalRoot
  );
};

export default AddTransaction;
