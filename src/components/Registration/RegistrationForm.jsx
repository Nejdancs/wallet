import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  FormApp,
  FormField,
  FormLabel,
  LogoContainer,
  ErrorText,
  IconMail,
  IconPassword,
  IconName,
} from './RegistrationForm.styled';

import Button from 'components/Button/Button';

import Logo from 'components/Logo/Logo';
import regEx from 'assets/regEx/regEx';

const onValidate = yup.object().shape({
  email: yup
    .string()
    .min(2)
    .matches(regEx.email, 'type valid email')
    .required(),
  password: yup
    .string()
    .min(6, 'must min length 6')
    .max(12, 'must max length 12')
    .matches(regEx.password, 'bykBa i cufra')

    .required(),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const history = useHistory();

  const onSubmit = (values, onSubmitProps) => {
    // dispatch(values);
    // onSubmitProps.setSubmitting(false);
    // onSubmitProps.resetForm();
  };

  const onRegBtn = () => {
    // history.push('/signup');
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={onValidate}
        onSubmit={onSubmit}
      >
        <FormApp>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <FormLabel>
            <FormField type="email" name="email" placeholder="E-mail" />
            <IconMail />
            <ErrorMessage
              name="email"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <FormLabel>
            <FormField type="password" name="password" placeholder="Password" />
            <IconPassword />
            <ErrorMessage
              name="password"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <FormLabel>
            <FormField
              type="password"
              name="password"
              placeholder="Confirm password"
            />
            <IconPassword />
            <ErrorMessage
              name="password"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <FormLabel>
            <FormField type="name" name="name" placeholder="First name" />
            <IconName />
            <ErrorMessage
              name="name"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </FormLabel>
          <Button main type="submit">
            Register
          </Button>
          <Button
            type="button"
            onClick={() => {
              navigate('/login');
            }}
          >
            Log In
          </Button>
        </FormApp>
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
