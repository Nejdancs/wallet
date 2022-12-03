import styled from 'styled-components';
import theme from 'theme/theme';
import device from 'assets/breakpoints/device';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 32px;
  }
  @media ${device.desktop} {
    flex-basis: 715px;
  }
`;

export const Column = styled.div`
  &:nth-child(1) {
    @media ${device.tablet} {
      flex-basis: 45%;
    }
    @media ${device.desktop} {
      flex-basis: 35%;
    }
  }
  &:nth-child(2) {
    flex-grow: 1;
  }
`;

export const Title = styled.h1`
  margin-bottom: 8px;
  font-family: ${theme.fontFamily.poppins};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  @media ${device.desktop} {
    margin-left: 15px;
  }
`;
