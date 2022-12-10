import { motion } from 'framer-motion';
import RegisterForm from 'components/RegistrationForm/RegistrationForm';
import {
  PageContainer,
  ImgContainerRegister,
  NameApp,
  ImgSection,
  Container,
  FormWrapper,
} from './AuthenticationPage.styled';

const RegisterPage = () => {
  return (
    <Container>
      <PageContainer>
        <ImgSection>
          <motion.div
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ImgContainerRegister />{' '}
          </motion.div>
          <NameApp>Finance App</NameApp>
        </ImgSection>
        <FormWrapper>
          <RegisterForm />
        </FormWrapper>
      </PageContainer>
    </Container>
  );
};

export default RegisterPage;
