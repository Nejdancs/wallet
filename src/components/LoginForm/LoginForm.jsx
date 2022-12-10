import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import authValidate from 'assets/ValidateSchema/authValidate';
import ButtonShowPassword from 'components/ButtonShowPassworg/ButtonShowPassworg';
import {
  FormContainer,
  Form,
  FormField,
  FormLabel,
  LogoContainer,
  ErrorText,
  IconMail,
  IconPassword,
} from 'components/AuthStyleForm/AuthForm.styled';
import { toast } from 'react-toastify';

import operations from 'redux/auth/auth-operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    const res = await dispatch(operations.logIn(values));

    if (res.error && res.payload === 401) {
      toast.error('Email or password is wrong');
      return;
    } else if (res.error) {
      toast.error('Something went wrong! Please, try again');
      return;
    }

    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={authValidate.login}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <LogoContainer>
                <Logo />
              </LogoContainer>
            </motion.div>
            <FormLabel>
              <FormField
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="E-mail"
              />
              <IconMail />
              <ErrorMessage
                name="email"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>

            <FormLabel>
              <FormField
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <IconPassword />
              <ButtonShowPassword
                type="button"
                setShowPassword={setShowPassword}
                showPassword={showPassword}
              />

              <ErrorMessage
                name="password"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>
            <motion.div
              initial={{ x: -340, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              <Button main type="submit">
                Log In
              </Button>
            </motion.div>
            <motion.div
              initial={{ x: 340, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.3 }}
            >
              <Button
                type="button"
                onClick={() => {
                  navigate('/signup');
                }}
              >
                Register
              </Button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
