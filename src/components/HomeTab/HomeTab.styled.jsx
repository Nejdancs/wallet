import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const HomeTabContainer = styled.div`
  flex-grow: 1;
  padding-bottom: 32px;
  @media ${device.desktop} {
    padding-top: 46px;
    padding-bottom: 46px;
    padding-left: 69px;
  }
`;

export const HomeTable = styled.table`
  @media ${device.tablet} {
    width: 100%;
    margin: 0px;
    display: table;
    border-spacing: 0px;
    height: auto;
    table-layout: fixed;
  }
`;

export const HomeTabHeader = styled.thead``;

export const ColumnHeader = styled.th`
  padding: 16px 10px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;

  background: #ffffff;

  :first-child {
    width: 100px;
    padding-left: 20px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  :nth-child(2) {
    width: 100px;
    text-align: center;
  }
  :nth-child(3) {
    width: 150px;
  }

  :nth-child(5) {
    width: 110px;
    text-align: right;
  }

  :last-child {
    text-align: right;
    padding-right: 20px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const HomeTr = styled.tr`
  height: 54px;
`;

export const HomeTabColumn = styled.td`
  table-layout: fixed;

  overflow: hidden;
  padding: 8px 10px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  word-wrap: break-word;
  text-align: left;

  color: #000000;

  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

  :nth-child(2) {
    text-align: center;
  }

  :nth-child(5) {
    font-weight: 700;
    text-align: right;

    color: ${({ fields, theme }) =>
      fields.type === '+'
        ? theme.colors.incomeColor
        : theme.colors.expenseColor};
  }

  :nth-child(6) {
    text-align: right;
  }

  :nth-child(4) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      overflow: visible;
      white-space: normal;
      word-wrap: break-word;
      text-overflow: unset;
    }
  }

  :first-child {
    padding-left: 20px;
  }

  :last-child {
    padding-right: 20px;
  }
`;

export const SortArrow = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -14px;
  font-size: 14px;
  color: ${p => (!p.isSorted ? '#a8a7a7' : p.theme.colors.primaryTextColor)};
  transform: translateY(-50%);
`;
