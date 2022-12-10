import Button from 'components/Button/Button';
import React from 'react';
import { Modal, Title, Input } from './ModalAddCategory.styled';
import { CloseBtn } from '../AddTransaction/addTransaction.styled';
import CloseSvg from '../../images/close.svg';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import SwitchToggle from 'components/AddTransaction/SwitchToggle/SwitchToggle';
import schema from 'assets/ValidateSchema/createCategorySchema';
import API from 'services/api/api';
import { toast } from 'react-toastify';

export const ModalAddCategory = () => {
  const [type, setType] = useState('expense');
  const [categoryName, setCategoryName] = useState('');

  const onTypeChange = checked => {
    checked ? setType('income') : setType('expense');
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const data = await API.addCategory({ name: categoryName, type });
      //добавить логику закрытия модалки
      toast(`Category ${data.data.name} is created`);
    } catch (error) {
      toast(`${error.response.data.message}`);
    }
  };
  return (
    <Modal>
      <Title>Create new category</Title>
      {/* //добавить логику закрытия модалки */}
      <CloseBtn>
        <img src={CloseSvg} alt="close" onClick={() => {}} />
      </CloseBtn>
      <SwitchToggle onChange={onTypeChange} />
      <Formik
        initialValues={{ categoryName: 'expense' }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            name="categoryName"
            placeholder="Category name"
            onChange={e => setCategoryName(e.target.value)}
            value={categoryName}
          />

          <Button main type="submit">
            Create
          </Button>
          {/* //добавить логику закрытия модалки */}
          <Button onClick={() => {}}>Cancel</Button>
        </Form>
      </Formik>
    </Modal>
  );
};
