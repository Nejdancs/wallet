import styled from 'styled-components';

export const WrapperContainer = styled.div`
  max-width: 100%;
  height: auto;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;
