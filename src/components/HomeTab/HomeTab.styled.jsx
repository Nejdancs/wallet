import styled from 'styled-components';
import device from 'assets/breakpoints/device';

export const HomeTabContainer = styled.div`
  td {
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }

  th:last-child,
  td:last-child {
    border-right: 0;
  }

  @media ${device.desktop} {
    padding-top: 46px;
    padding-left: 69px;
  }
`;

export const HomeTable = styled.table`
  width: 100%;

  /* position: absolute;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  color: currentColor;
  clip: rect(0 0 0 0);
  overflow: hidden; */

  td {
    table-layout: fixed;
    width: 114.66 px;
    overflow: hidden;
    word-wrap: break-word;
    padding: 10px;
    padding-top: 14px;
    padding-bottom: 14px;
    text-align: center;
  }

  td:nth-child(1) {
    color: #000!important;
  }

  td:nth-child(2) {
    color: #000!important;
  }

  td:nth-child(3) {
    text-align: left;
    color: #000!important;
  }

  th:nth-child(3) {
    text-align: left;
  }

  td:nth-child(4) {
    text-align: left;
    color: #000!important;
  }

  td:nth-child(5) {
    text-align: right;
  }

  td:nth-child(6) {
    text-align: right;
    padding-right: 20px;
    color: #000!important;
  }

  th:nth-child(5) {
    text-align: right;
  }

  th:nth-child(6) {
    text-align: right;
    padding-right: 20px;
  }

  @media ${device.tablet} {
    margin: 0px;
    position: static;
    display: table;
    border-spacing: 0px;
    height: auto;
    table-layout: fixed;
  }
`;

export const HomeTabHeader = styled.thead`
  th:first-child {
    background: #ffffff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  th:last-child {
    background: #ffffff;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  th {
    padding: 10px;
    text-align: center;
  }

  th:not(:first-child) {
    background: #ffffff;
  }
`;

export const ColumnHeader = styled.th`
  font-family: Circe;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
`;

export const HomeTr = styled.tr`
  &:not(:nth-child(5)) {
    color: #000;
  }
`;

export const HomeTabColumn = styled.td`
  font-family: Circe;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: right;
  word-wrap: break-word;
  color: #000;

  th {
    table-layout: fixed;
    width: 114.66 px;
    overflow: hidden;
    word-wrap: break-word;

    padding: 10px;
    text-align: center;
  }
`;
