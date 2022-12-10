import styled from 'styled-components';

export const SwitchContainer = styled.form`
  padding: 0;
  margin: 0;

  height: 40px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
  margin-bottom: 40px;
`;

export const Switch = styled.label`
  position: relative;

  width: 80px;
  height: 40px;
`;

export const Slider = styled.div`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border: 1px solid #e0e0e0;
  border-radius: 30px;

  :before {
    position: absolute;
    content: '';
    height: 44px;
    width: 44px;
    top: -2px;
    left: 34px;

    background-color: #ff6596;
    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);

    border-radius: 50%;
  }
`;

export const Income = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #e0e0e0;
`;
export const Expense = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #e0e0e0;
`;
export const IcPlus = styled.img`
  position: absolute;
  top: 10px;
  left: 6px;
`;
export const IcMinus = styled.img`
  position: absolute;
  top: 18px;
  right: 12px;
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    &::before {
      transform: translateX(-40px);
      background-color: #24cca7;
      box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    }
  }
`;
