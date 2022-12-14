import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const DashboardContainer = styled.div`
  padding-top: 15px;

  @media ${device.tablet} {
    padding-top: 8px;
  }
  @media ${device.desktop} {
    padding-top: 0;
    margin-bottom: 32px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
  @media ${device.tablet} {
    display: flex;
    gap: 32px;
    padding-top: 32px;
    margin-bottom: 20px;
  }
  @media ${device.desktop} {
    display: block;
    padding: 40px 69px 40px 0;
    margin-bottom: 0;

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
