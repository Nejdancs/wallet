import styled from 'styled-components';
import theme from 'theme/theme';

export const ChartContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
`;
export const DoughnutBalance = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;
export const Title = styled.h1`
  font-family: ${theme.fontFamily.poppins};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
`;
