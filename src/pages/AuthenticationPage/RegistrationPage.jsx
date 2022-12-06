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
  );
};

export default RegisterPage;
