import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import onValidate from 'assets/ValidateSchema/onValidate';
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
} from 'components/AuthStyleForm/AutheticationForm.styled';

import operations from 'redux/auth/auth-operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    console.log('first');
    const res = await dispatch(operations.logIn(values));

    if (res.error && res.payload === 400) {
      return;
    } else if (res.error) {
      return;
    }

    resetForm();
  };

  const onRegBtn = () => {};

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        // validationSchema={onValidate}
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
                onInput={evt => setPassword(evt.target.value)}
              />
              <ButtonShowPassword
                setShowPassword={setShowPassword}
                showPassword={showPassword}
              />
              <IconPassword />
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
