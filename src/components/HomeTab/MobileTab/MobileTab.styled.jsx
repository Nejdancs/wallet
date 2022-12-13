import styled from 'styled-components';

export const MobileTable = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: table;
  table-layout: fixed;
  width: 100%;
`;

export const TableBody = styled.tbody`
  width: 100%;
  border-left: 5px solid
    ${p =>
      p.type === '+'
        ? p.theme.colors.incomeColor
        : p.theme.colors.expenseColor};
`;

export const ColHeader = styled.td`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  padding: 10px 15px;
`;

export const Column = styled.td`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: right;
  word-wrap: break-word;
  color: #000;
  padding: 10px 20px 10px 0;
`;

export const CommentColumn = styled.td`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  justify-content: right;
  text-align: left;
  word-wrap: break-word;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 10px 20px 10px 0;
`;

export const CommentContainer = styled.div`
  width: 110px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: right;
  margin: 0;
  overflow: hidden;
`;

export const TabRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgb(255 255 255 / 60%);
  }
`;

export const Table = styled.table`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  td {
    border: none !important;
  }
`;
