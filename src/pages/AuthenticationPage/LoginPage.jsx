import LoginForm from 'components/Login/LoginForm';
import {
  ContainerPage,
  FormContainer,
  ImageContainerLog,
  Text,
  ImageSection,
  Container,
  FormWrapper,
} from './AuthenticationPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <ContainerPage>
        <ImageSection>
          <ImageContainerLog />
          <Text>Finance App</Text>
        </ImageSection>
        <FormWrapper>
          <FormContainer>
            <LoginForm />
          </FormContainer>
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};
export default LoginPage;
