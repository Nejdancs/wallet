import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const Table = styled.table`
  flex-shrink: 0;
  width: 100%;

  @media ${device.desktop} {
    width: 715px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Card = styled.li`
  border-radius: 10px;
  overflow: hidden;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  background-color: #fff;
  border-left: 5px solid #ff6596;

  :not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;

export const Head = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  color: #000000;
`;

export const Body = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
`;
