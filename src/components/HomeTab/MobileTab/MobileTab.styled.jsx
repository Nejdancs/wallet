import styled from "styled-components";
import device from 'assets/breakpoints/device';

export const MobileTable = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: table;
    width: 280px;
    table-layout: fixed;
    @media ${device.tablet} {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        color: currentColor;
        clip: rect(0 0 0 0);
        overflow: hidden;
  }
`;

export const Table = styled.table`
    background: #ffffff;
    opacity: 0.8;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 280px;
`;

export const GreenTable = styled.table`
    background: #ffffff;
    opacity: 0.8;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 280px;
    border-left: 5px solid #24cca7;
`;

export const RedTable = styled.table`
    background: #ffffff;
    opacity: 0.8;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 280px;
    border-left: 5px solid #ff6596;
`;

export const TableBody = styled.tbody`
    width: 280px;
    @media ${device.tablet} {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        color: currentColor;
        clip: rect(0 0 0 0);
        overflow: hidden;
  }
`;

export const TabRow = styled.tr`
    width: 280px;
    margin-top: 0px;
`;

export const ColHeader = styled.td`
    font-family: Circe;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const Column = styled.td`
    font-family: Circe;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: right;
    word-wrap: break-word;
    color: #000;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const ColHeaderDef = styled.td`
    font-family: Circe;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const ColumnDef = styled.td`
    font-family: Circe;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: right;
    word-wrap: break-word;
    color: #000;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`;