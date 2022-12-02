import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const WrapperContainer = styled.div`
  max-width: 100%;
  height: auto;
  padding: 0 20px;
  margin: 0 auto;

  @media ${device.mobile} {
    width: 480px;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    width: 768px;
    padding: 0 32px;
  }

  @media ${device.desktop} {
    width: 1280px;
    padding: 0 16px;
  }
`;
