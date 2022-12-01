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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        // setLoading(true);
        const data = await fetchCurrency();
        const slicedData = data.slice(0, 3);
        console.log(slicedData);
        setCurrency([...slicedData]);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const id = setInterval(() => {
      // console.log('new request');
      fetch();
    }, 5000);

    return () => clearInterval(id);
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
