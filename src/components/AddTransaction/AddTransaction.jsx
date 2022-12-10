import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Formik, Form, Field } from 'formik';
import Media from 'react-media';
import * as yup from 'yup';
import API from 'services/api/api';

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
import { ModalAddCategory } from 'components/ModalAddCategory/ModalAddCategory';

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
  const [categories, setCategories] = useState([]);

  const [showModalCategory, setShowModalCategory] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await API.getCategories();
      console.log(data);

      const categories = data.expenses.map(el => ({
        value: el._id,
        label: el.name,
      }));

      setCategories(categories);
    })();
  }, [showModalCategory]);

  // const optionsArr = [
  //   'Main',
  //   'Food',
  //   'Auto',
  //   'Development',
  //   'Children',
  //   'House',
  //   'Education',
  //   'Reset',
  // ];

  // const options = optionsArr.map((el, index) => {
  //   return <SelectOption key={index}>{el}</SelectOption>;
  // });

  const changeSelect = e => {
    setCategories(e.target.value);
  };

  const handleChange = toggled => {
    setToggled(toggled);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const closeModalCategory = () => setShowModalCategory(false);

  return createPortal(
    <Layout>
      {showModalCategory && (
        <ModalAddCategory closeModal={closeModalCategory} />
      )}
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
            {!toggled && <Field as={Selektor} options={categories} />}
            <button onClick={() => setShowModalCategory(true)}>+</button>
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
