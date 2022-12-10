import styled, { keyframes } from "styled-components";
import device from "assets/breakpoints/device";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
`;

export const PageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PaginationButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    background-color: #fff;
    border-radius: 6px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #e0e0e0;
    }

    &:disabled {
        background-color: #e0e0e0;
        cursor: not-allowed;
    }
`;

export const PageCounterCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #757575;
    margin-left: 20px;
    margin-right: 20px;
`;

export const PageCounter = styled.em`
    font-size: 16px;
    font-weight: 500;
    color: #757575;
    margin-left: 3px;
`;

export const SizeSelector = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 40px;
    background-color: #fff;
    border: none;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #e0e0e0;
    }
`;

export const SelectOption = styled.option`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #e0e0e0;
    }
`;

export const ButtonImgLeft = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 10px;
`;

export const ButtonImgRight = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 10px;
`;