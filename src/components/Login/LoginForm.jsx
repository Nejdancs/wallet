import React from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import { Formik, ErrorMessage } from 'formik';
import {
  FormContainer,
  FormApp,
  FormField,
  FormLabel,
  LogoContainer,
  ErrorText,
  IconMail,
  IconPassword,
  LogoM,
} from './LoginForm.styled';
import { Button } from 'components/Button/Button.styled';
// import Logo from 'components/Logo/Logo';

const onValidate = yup.object().shape({
  email: yup.string().min(2).required(),
  password: yup.string().length(7).required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const onSubmit = (values, onSubmitProps) => {
    dispatch(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
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
            <LogoM />
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
          <Button type="submit" onSubmit={onSubmit}>
            Log In
          </Button>
          <Button type="button" typeButton="secondary" onClick={onRegBtn}>
            Register
          </Button>
        </FormApp>
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
