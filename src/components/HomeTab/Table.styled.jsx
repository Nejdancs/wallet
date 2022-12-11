import styled, { keyframes } from 'styled-components';
import device from 'assets/breakpoints/device';

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
  width: 100px;
  height: 40px;

  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #a8a8ac;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);

  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: #4a56e2;
    color: #ffffff;
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
  padding: 10px 20px;
  width: 120px;
  height: 40px;

  border: 1px solid #a8a8ac;
  border-radius: 30px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);

  background-color: #fff;

  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    border: 1px solid #4a56e2;
  }
`;

export const SelectOption = styled.option`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 130px;
  height: 40px;

  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;
