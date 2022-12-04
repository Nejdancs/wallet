import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const DashboardContainer = styled.div`
  margin-bottom: 32px;
  padding-top: 15px;

  @media ${device.tablet} {
    padding-top: 8px;
  }
  @media ${device.desktop} {
    padding-top: 0;
  }
`;

export const Wrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media ${device.desktop} {
    display: block;
    padding-top: 40px;
    padding-right: 138px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 0px;
      left: 463px;
      top: 0;
      bottom: 0;
      border: 1px solid #e7e5f2;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;
