import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const Progress = styled.div`
  background-color: rgb(224, 224, 224);
  width: 100%;
  height: 4px;
  margin-top: -15px;
  border-radius: 15px;
  transition: all 0.5s linear;
`;

export const ProgressBar = styled.div`
  margin-top: 20px;
  @media ${device.tablet} {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TextBar = styled.p`
  font-size: 12px;
  text-align: end;
  position: absolute;
  top: 36px;
  right: 0;
`;
