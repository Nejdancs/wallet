import LoginForm from 'components/Login/LoginForm';
import {
  ContainerPage,
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
          <LoginForm />
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};
export default LoginPage;
