import Button from 'components/Button/Button';
import React from 'react';
import {
  Modal,
  Title,
  Input,
  BtnContainer,
  ErrorText,
  FormLabel,
  Backdrop,
} from './ModalAddCategory.styled';

import { Formik, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import SwitchToggle from 'components/AddTransaction/SwitchToggle/SwitchToggle';
import schema from 'assets/ValidateSchema/createCategorySchema';
import API from 'services/api/api';
import { toast } from 'react-toastify';
import { createPortal } from 'react-dom';

const modalRoot2 = document.querySelector('#modal-root-2');

export const ModalAddCategory = ({ closeModal }) => {
  const [type, setType] = useState('expense');
  const [isLoading, setIsLoading] = useState(false);

  const onTypeChange = checked => {
    checked ? setType('income') : setType('expense');
  };

  const onSubmit = async ({ categoryName }) => {
    setIsLoading(true);
    try {
      const data = await API.addCategory({ name: categoryName, type });
      toast.success(`Category ${data.data.name} is created`);
      closeModal();
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
    setIsLoading(false);
  };
  return createPortal(
    <Backdrop
      onClick={e => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <Modal>
        <Title>Create new category</Title>

        <SwitchToggle
          onChange={onTypeChange}
          onLoad={type => setType(type.toLowerCase())}
        />
        <Formik
          initialValues={{ categoryName: '' }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit}>
              <FormLabel>
                <Input
                  type="text"
                  name="categoryName"
                  placeholder="Category name"
                  onChange={handleChange}
                  value={values.categoryName}
                />
                <ErrorMessage
                  render={msg => <ErrorText>{msg}</ErrorText>}
                  name="categoryName"
                />
              </FormLabel>
              <BtnContainer>
                <Button disabled={isLoading} main type="submit">
                  {isLoading ? 'Loading...' : 'Create'}
                </Button>
                <Button onClick={closeModal}>Cancel</Button>
              </BtnContainer>
            </Form>
          )}
        </Formik>
      </Modal>
    </Backdrop>,
    modalRoot2
  );
};
