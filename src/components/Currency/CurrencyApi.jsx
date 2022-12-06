import axios from 'axios';

const fetchCurrency = async () => {
  try {
    // const response = await fetch('https://api.monobank.ua/bank/currency');
    // const { data } = await axios.get('https://api.monobank.ua/bank/currency');
    const { data } = await axios.get(
      'https://wallet-test.onrender.com/api/currency'
    );
    console.log('fetching datas');
    console.log(data.data.currency);
    // return data;
    // const slicedData = data.slice(0, 3);
    // console.log('slicedDatay', slicedData);
    // localStorage.setItem('currencyData', JSON.stringify(slicedData));
    localStorage.setItem('currencyData', JSON.stringify(data.data.currency));
  } catch (error) {
    throw error;
  }
};

export default fetchCurrency;

// import axios from 'axios';

// const fetchCurrency = async () => {
//   try {
//     // const response = await fetch('https://api.monobank.ua/bank/currency');
//     const { data } = await axios.get('https://api.monobank.ua/bank/currency');

//     // return data;
//     const slicedData = data.slice(0, 3);
//     localStorage.setItem('currencyData', JSON.stringify(slicedData));
//   } catch (error) {
//     throw error;
//   }
// };

// export default fetchCurrency;
