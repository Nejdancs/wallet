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

export const ModalAddCategory = ({ closeModal }) => {
  const [type, setType] = useState('expense');
  const [categoryName, setCategoryName] = useState('');

  const onTypeChange = checked => {
    checked ? setType('income') : setType('expense');
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const data = await API.addCategory({ name: categoryName, type });
      toast(`Category ${data.data.name} is created`);
      closeModal();
    } catch (error) {
      toast(`${error.response.data.message}`);
    }
  };
  return (
    <Modal>
      <Title>Create new category</Title>
      <CloseBtn>
        <img src={CloseSvg} alt="close" onClick={closeModal} />
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
          <Button onClick={closeModal}>Cancel</Button>
        </Form>
      </Formik>
    </Modal>
  );
};
