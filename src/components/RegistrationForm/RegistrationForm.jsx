import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import authValidate from 'assets/ValidateSchema/authValidate';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import RegBar from './RegBar/RegBar';
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
  IconName,
  ErrorTextConfirm,
} from 'components/AuthStyleForm/AuthForm.styled';
import { toast } from 'react-toastify';

import operations from 'redux/auth/auth-operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    const { email, password, name } = values;
    const res = await dispatch(operations.signUp({ email, password, name }));

    if (res.error && res.payload === 409) {
      toast.error(`User with email ${email} already exist`);
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
          confirmPassword: '',
          name: '',
        }}
        validationSchema={authValidate.signUp}
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

            <FormLabel>
              <FormField
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
              <IconPassword />
              <ButtonShowPassword
                type="button"
                setShowPassword={setConfirmShowPassword}
                showPassword={showConfirmPassword}
              />

              <RegBar password={password} />
              <ErrorMessage
                name="confirmPassword"
                render={msg => <ErrorTextConfirm>{msg}</ErrorTextConfirm>}
              />
            </FormLabel>
            <FormLabel>
              <FormField
                type="text"
                name="name"
                value={values.username}
                onChange={handleChange}
                placeholder="First name"
              />
              <IconName />
              <ErrorMessage
                name="name"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>
            <motion.div
              initial={{ x: -340, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              <Button main type="submit">
                Register
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
                  navigate('/login');
                }}
              >
                Log In
              </Button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
