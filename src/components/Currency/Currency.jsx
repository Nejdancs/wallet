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
  // const [loading, setLoading] = useState(false);
  // const [datasTime, setDatasTime] = useState('');

  async function readFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('currencyData'));
    if (data && data.length === 3) {
      // setTimeout(() => {
      console.log('data is already in the Local Storage');
      setCurrency(data);

      // }, 1000);
    } else {
      const interval = setInterval(() => {
        const data = JSON.parse(localStorage.getItem('currencyData'));
        if (data && data.length > 0) {
          setCurrency(data);
          console.log('this is console after data has been got');
          clearInterval(interval);
          setTimeout(() => {
            localStorage.removeItem('currencyData');
          }, 600000);
        } else {
          console.log('data has not been found. calling fetch function');
          fetchCurrency();
        }
      }, 3000);
    }
  }

  useEffect(() => {
    readFromLocalStorage();
    const interval = setInterval(() => {
      readFromLocalStorage();
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

// import React, { useEffect, useState } from 'react';
// import fetchCurrency from './CurrencyApi';
// import {
//   CurrensyItems,
//   CurrencyList,
//   CurrencyWrapper,
//   CurrencyListHeader,
//   HeaderText,
//   CurrencyInfoText,
// } from './Currency.styled';

// function Currency() {
//   const [currency, setCurrency] = useState([]);
//   // const [loading, setLoading] = useState(false);
//   // const [datasTime, setDatasTime] = useState('');

//   async function readFromLocalStorage() {
//     const data = JSON.parse(localStorage.getItem('currencyData'));
//     if (data && data.length === 3) {
//       setTimeout(() => {
//         setCurrency(data);
//       }, 1000);
//     } else {
//       const interval = setInterval(() => {
//         fetchCurrency();
//         const data = JSON.parse(localStorage.getItem('currencyData'));
//         if (data) {
//           clearInterval(interval);

//           setCurrency(data);

//           setTimeout(() => {
//             localStorage.removeItem('currencyData');
//           }, 120000);
//         }
//       }, 7000);
//     }
//   }

//   useEffect(() => {
//     readFromLocalStorage();
//     const interval = setInterval(() => {
//       readFromLocalStorage();
//       // fetchCurrency();
//       // const data = JSON.parse(localStorage.getItem('currencyData'));
//       // setCurrency(data);
//     }, 240000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <CurrencyWrapper>
//       <CurrencyListHeader>
//         <HeaderText>Currency</HeaderText>
//         <HeaderText>Purchase</HeaderText>
//         <HeaderText>Sale</HeaderText>
//       </CurrencyListHeader>
//       <CurrencyList>
//         {currency.length === 0
//           ? 'waiting for rates.......  some spinner'
//           : currency?.map((el, index) => (
//               <CurrensyItems key={`${index}${el.currencyCodeA}`}>
//                 <CurrencyInfoText>
//                   {index === 0 && 'USD'}
//                   {index === 1 && 'EUR'}
//                   {index === 2 && 'Є/$'}
//                 </CurrencyInfoText>
//                 <CurrencyInfoText>
//                   {index === 0 || index === 1
//                     ? el.rateBuy.toFixed(2)
//                     : el.rateBuy}
//                 </CurrencyInfoText>
//                 <CurrencyInfoText>
//                   {index === 0 || index === 1
//                     ? el.rateSell.toFixed(2)
//                     : el.rateSell}
//                 </CurrencyInfoText>
//               </CurrensyItems>
//             ))}
//       </CurrencyList>
//     </CurrencyWrapper>
//   );
// }

// export default Currency;
