import {
  BalanceWrapper,
  BalanceTitle,
  BalanceValue,
  BalanceSpan,
} from './Balance.styled';

const Balance = () => {
  return (
    <BalanceWrapper>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>
        <BalanceSpan>&#8372;</BalanceSpan>
        24.000
      </BalanceValue>
    </BalanceWrapper>
  );
};

export default Balance;
