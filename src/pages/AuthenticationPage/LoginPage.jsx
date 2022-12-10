import { motion } from 'framer-motion';
import LoginForm from 'components/LoginForm/LoginForm';
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
    <Container>
      <PageContainer>
        <ImgSection>
          <motion.div
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ImgContainerLogin />
          </motion.div>
          <NameApp>Finance App</NameApp>
        </ImgSection>

        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </PageContainer>
    </Container>
  );
};
export default LoginPage;
