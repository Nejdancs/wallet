import { motion } from 'framer-motion';
import LoginForm from 'components/Login/LoginForm';
import {
  PageContainer,
  ImgContainerLogin,
  NameApp,
  ImgSection,
  Container,
  FormWrapper,
} from './AuthenticationPage.styled';

const LoginPage = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <PageContainer>
          <ImgSection>
            <ImgContainerLogin />
            <NameApp>Finance App</NameApp>
          </ImgSection>
          <FormWrapper>
            <LoginForm />
          </FormWrapper>
        </PageContainer>
      </Container>
    </motion.div>
  );
};
export default LoginPage;
