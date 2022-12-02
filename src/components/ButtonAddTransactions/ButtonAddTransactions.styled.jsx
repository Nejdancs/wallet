import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const Button = styled.button`
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 90vh;
  width: 44px;
  height: 44px;

  background-color: #24cca7;

  border-radius: 50%;

  border: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background-color: rgb(25, 142, 116);
  }

  @media ${device.desktop} {
    right: 40px;
    bottom: 40px;
  }
`;

export const IconButton = styled.svg`
  display: inline-flex;
  width: 20px;
  height: 20px;
  fill: currentColor;

  color: white;

  &:hover,
  &:focus {
    color: #ff6b08;
  }
  margin: auto;
`;
