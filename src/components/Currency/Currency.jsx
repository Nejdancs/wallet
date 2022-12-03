import React, { useEffect, useState } from 'react';
import fetchCurrency from './CurrencyApi';
import {
  CurrensyItems,
  CurrencyList,
  CurrencyWrapper,
  CurrencyListHeader,
  HeaderText,
  CurrencyInfoText,
} from './Currensy.styled';

function Currency() {
  const [currency, setCurrency] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [datasTime, setDatasTime] = useState('');

  async function readFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('currencyData'));
    if (data && data.length === 3) {
      setTimeout(() => {
        setCurrency(data);
      }, 1000);
    } else {
      const interval = setInterval(() => {
        fetchCurrency();
        const data = JSON.parse(localStorage.getItem('currencyData'));
        if (data) {
          clearInterval(interval);

          setCurrency(data);

          setTimeout(() => {
            localStorage.removeItem('currencyData');
          }, 600000);
        }
      }, 7000);
    }
  }

  useEffect(() => {
    readFromLocalStorage();
    const interval = setInterval(() => {
      readFromLocalStorage();
      // fetchCurrency();
      // const data = JSON.parse(localStorage.getItem('currencyData'));
      // setCurrency(data);
    }, 1200000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CurrencyWrapper>
      <CurrencyListHeader>
        <HeaderText>Currency</HeaderText>
        <HeaderText>Purchase</HeaderText>
        <HeaderText>Sale</HeaderText>
      </CurrencyListHeader>
      <CurrencyList>
        {currency.length === 0
          ? 'waiting for rates.......  some spinner'
          : currency?.map((el, index) => (
              <CurrensyItems key={`${index}${el.currencyCodeA}`}>
                <CurrencyInfoText>
                  {index === 0 && 'USD'}
                  {index === 1 && 'EUR'}
                  {index === 2 && 'Є/$'}
                </CurrencyInfoText>
                <CurrencyInfoText>
                  {index === 0 || index === 1
                    ? el.rateBuy.toFixed(2)
                    : el.rateBuy}
                </CurrencyInfoText>
                <CurrencyInfoText>
                  {index === 0 || index === 1
                    ? el.rateSell.toFixed(2)
                    : el.rateSell}
                </CurrencyInfoText>
              </CurrensyItems>
            ))}
      </CurrencyList>
    </CurrencyWrapper>
  );
}

export default Currency;
