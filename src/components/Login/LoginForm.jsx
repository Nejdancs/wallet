import React from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  FormApp,
  FormField,
  StyledInput,
  FormLabel,
  LogoContainer,
  ErrorText,
  IconInput,
} from './LoginForm.styled';
import { Button } from 'components/Button/Button.styled';
import Logo from 'components/Logo/Logo';
import email from '../../images/email.svg';

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
    <div>
      <div>
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
              <StyledInput type="email" name="email" placeholder="E-mail" />
              <IconInput src={email} />
              <ErrorMessage
                name="email"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>

            <FormLabel>
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
              />
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
      </div>
    </div>
  );
};

export default LoginForm;
