import styled from 'styled-components';
import { ReactComponent as Eye } from 'images/EyesShow.svg';
import { ReactComponent as EyeClose } from 'images/EyeClose.svg';

const ButtonShowPassword = ({ setShowPassword, showPassword, ...props }) => {
  return (
    <BtnIcon
      {...props}
      onClick={() => {
        setShowPassword(!showPassword);
      }}
    >
      {showPassword ? <ButtonHide /> : <ButtonShow />}
    </BtnIcon>
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
  fill: #bdbdbd;
`;

const ButtonHide = styled(EyeClose)`
  fill: #bdbdbd;
`;

export default ButtonShowPassword;
