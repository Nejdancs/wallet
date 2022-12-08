import { motion } from 'framer-motion';
import RegisterForm from 'components/Registration/RegistrationForm';
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
    <motion.div
      initial={{ scale: 0.9, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <PageContainer>
          <ImgSection>
            <ImgContainerRegister />
            <NameApp>Finance App</NameApp>
          </ImgSection>
          <FormWrapper>
            <RegisterForm />
          </FormWrapper>
        </PageContainer>
      </Container>
    </motion.div>
  );
};

export default RegisterPage;
