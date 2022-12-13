import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const Icon = styled.img`
  width: 20px;
  height: 20px;

  color: ${props => props.theme.colors.secondaryTextColor};

  margin: auto;
`;

export const Button = styled.button`
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 20px;
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
    background-color: rgb(7, 126, 100);
  }

  @media ${device.desktop} {
    right: 40px;
    bottom: 40px;

    [data-scroll-lock] & {
      right: 57px;
    }
  }
`;
