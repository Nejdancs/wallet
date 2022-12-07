import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import onValidate from 'assets/ValidateSchema/onValidate';
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const onSubmit = (values, onSubmitProps) => {
    // dispatch(values);
    // onSubmitProps.setSubmitting(false);
    // onSubmitProps.resetForm();
  };

  const onRegBtn = () => {};

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          firstname: '',
        }}
        validationSchema={onValidate}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <LogoContainer>
              <Logo />
            </LogoContainer>
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
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                onInput={evt => setPassword(evt.target.value)}
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
              transition={{ duration: 0.9, delay: 1.2 }}
            >
              <Button main type="submit">
                Log In
              </Button>
            </motion.div>
            <motion.div
              initial={{ x: 340, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 2 }}
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
