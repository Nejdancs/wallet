import React, { useEffect, useState } from 'react';
import fetchCurrency from './CurrencyApi';
import LoaderComponent from 'components/Loader/LoaderComponent';
import {
  CurrensyItems,
  CurrencyList,
  CurrencyWrapper,
  CurrencyListHeader,
  HeaderText,
  CurrencyInfoText,
} from './Currency.styled';

function Currency() {
  const [currency, setCurrency] = useState([]);

  async function readFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('currencyData'));
    if (data && data.length === 3) {
      setCurrency(data);
      setTimeout(() => {
        localStorage.removeItem('currencyData');
      }, 600000);
    } else {
      const interval = setInterval(() => {
        const data = JSON.parse(localStorage.getItem('currencyData'));
        if (data && data.length > 0) {
          setCurrency(data);
          clearInterval(interval);
          setTimeout(() => {
            localStorage.removeItem('currencyData');
          }, 600000);
        } else {
          fetchCurrency();
        }
      }, 1000);
    }
  }

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('currencyData'));
    // if (data) {
    //   localStorage.removeItem('currencyData');
    // }
    readFromLocalStorage();
    const interval = setInterval(() => {
      readFromLocalStorage();
    }, 1200000);

    window.onunload = () => {
      // Clear the local storage on window closed
      window.localStorage.removeItem('currencyData');
    };

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <CurrencyWrapper>
      <CurrencyListHeader>
        <HeaderText>Currency</HeaderText>
        <HeaderText>Purchase</HeaderText>
        <HeaderText>Sale</HeaderText>
      </CurrencyListHeader>
      <CurrencyList>
        {currency.length === 0 ? (
          <LoaderComponent />
        ) : (
          currency?.map((el, index) => (
            <CurrensyItems key={`${index}${el.currencyCodeA}`}>
              <CurrencyInfoText>
                {index === 0 && 'USD'}
                {index === 1 && 'EUR'}
                {index === 2 && 'Є/$'}
              </CurrencyInfoText>
              <CurrencyInfoText>
                {index === 0 || index === 1
                  ? Number(el.rateBuy).toFixed(2)
                  : Number(el.rateBuy).toFixed(3)}
              </CurrencyInfoText>
              <CurrencyInfoText>
                {index === 0 || index === 1
                  ? Number(el.rateSell).toFixed(2)
                  : Number(el.rateSell).toFixed(3)}
              </CurrencyInfoText>
            </CurrensyItems>
          ))
        )}
      </CurrencyList>
    </CurrencyWrapper>
  );
}

export default Currency;
