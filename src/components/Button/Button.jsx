import { StyledButton } from './Button.styled';

const Button = ({ children, main = false, type, onSubmit, onClick }) => {
  return (
    <StyledButton onClick={onClick} onSubmit={onSubmit} type={type} main={main}>
      {children}
    </StyledButton>
  );
};

export default Button;
