import styled from 'styled-components';

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

  background-color: ${props => props.theme.colors.accentPrimary};
  border-radius: 20px;
  border: none;
  color: ${props => props.theme.colors.secondaryTextColor};
  box-shadow: 0 8px 10px 0 rgba(0, 165, 36, 0.2);
  font-size: 18px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(7, 126, 100);
    color: #ffffff;
  }

  &:disabled {
    background-color: #ffffff;
    color: ${props => props.theme.colors.accentPrimary};
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
  width: 115px;
  height: 40px;

  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 10px 0 rgba(0, 165, 36, 0.2);
  background-color: #fff;

  outline: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
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
    background-color: #861515;
  }
`;
