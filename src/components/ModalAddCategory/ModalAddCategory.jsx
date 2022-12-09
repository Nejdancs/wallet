import Button from 'components/Button/Button';
import React from 'react';
import { Modal, Input } from './ModalAddCategory.styled';
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
} from '../AddTransaction/addTransaction.styled';
import CloseSvg from '../../images/close.svg';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import SwitchToggle from 'components/AddTransaction/SwitchToggle/SwitchToggle';

const schema = yup.object().shape({
  name: yup.string().required(),
});

export const ModalAddCategory = () => {
  const [type, setType] = useState('');
  const [categoryName, setCategoryName] = useState('');
  return (
    <Modal>
      <ModalTitle>Add transaction</ModalTitle>

      <CloseBtn type="button">
        <img src={CloseSvg} alt="close" />
      </CloseBtn>

      {/* <SwitchToggle /> */}
      <SwitchToggle />
      <Formik
        //   initialValues={}
        validationSchema={schema}
        //   onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Input type="text" name="name" placeholder="Category name" />

          <Button main type="submit">
            Add
          </Button>
          <Button>Cancel</Button>
        </Form>
      </Formik>
    </Modal>

    // <Modal>
    //   <h1>add category</h1>
    //   <input type="text" placeholder="type" name="type" />
    //   <input type="text" placeholder="name" name="name" />
    //   <Button type="submit">ADD</Button>
    //   <Button>CANCEL</Button>
    // </Modal>
  );
};
