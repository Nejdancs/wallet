import styled from 'styled-components';

export const BtnIcon = styled.img`
  width: px;
  height: 20px;
  color: ${props => props.theme.colors.secondaryTextColor};
  margin: auto;
`;

export const Btn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;

  width: 30px;
  height: 30px;
  background-color: #24cca7;
  border-radius: 50%;
  border: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(7, 126, 100);
  }
`;
