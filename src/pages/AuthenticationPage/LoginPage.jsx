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
  );
};
export default LoginPage;
// style={{ 'min-height': '890px' }}
