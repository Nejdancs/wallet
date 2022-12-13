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
  position: relative;

  @media ${device.tablet} {
    display: flex;
    gap: 32px;
    padding: 32px 0 20px;
  }
  @media ${device.desktop} {
    display: block;
    padding: 40px 69px 63px 0;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 0px;
      min-height: calc(100vh - 80px);
      left: 463px;
      top: 0;
      bottom: 0;
      border: 1px solid #e7e5f2;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;
