import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import onValidate from 'assets/ValidateSchema/onValidate';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import RegBar from './RegBar';
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
} from 'components/AuthStyleForm/AutheticationForm.styled';
import styled from 'styled-components';
import { ReactComponent as Eye } from 'images/EyesShow.svg';
import { ReactComponent as EyeClose } from 'images/EyeClose.svg';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values, onSubmitProps) => {};

  const onRegBtn = () => {};

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
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
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                onInput={evt => setPassword(evt.target.value)}
              />
              <BtnIcon
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <ButtonHide /> : <ButtonShow />}
              </BtnIcon>
              <IconPassword />
              <ErrorMessage
                name="password"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>

            <FormLabel>
              <FormField
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />

              <IconPassword />
              <RegBar password={password} />
              <ErrorMessage
                name="password"
                render={msg => <ErrorText>{msg}</ErrorText>}
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
              transition={{ duration: 0.9, delay: 1.2 }}
            >
              <Button main type="submit">
                Register
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

const BtnIcon = styled.button`
  position: absolute;
  padding: 7px 7px;
  right: 0;
  top: -3px;
  background: transparent;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    right: 0;
    top: 0;
  }
`;

const ButtonShow = styled(Eye)`
  fill: gray;
`;

const ButtonHide = styled(EyeClose)`
  fill: gray;
`;

export default RegisterForm;
