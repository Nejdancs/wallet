import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import {
  BalanceWrapper,
  BalanceTitle,
  BalanceValue,
  BalanceSpan,
} from './Balance.styled';

const Balance = () => {
  const balance = useSelector(authSelectors.getUserBalance);

  return (
    <BalanceWrapper>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>
        <BalanceSpan>&#8372;</BalanceSpan>
        {balance.toFixed(2)}
      </BalanceValue>
    </BalanceWrapper>
  );
};

export default Balance;
