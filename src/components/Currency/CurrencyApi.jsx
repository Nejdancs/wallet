import axios from 'axios';

const fetchCurrency = async () => {
  try {
    // const response = await fetch('https://api.monobank.ua/bank/currency');
    const { data } = await axios.get('https://api.monobank.ua/bank/currency');
    console.log(data);
    // return data;
    const slicedData = data.slice(0, 3);
    console.log(slicedData);
    localStorage.setItem('currencyData', JSON.stringify(slicedData));
  } catch (error) {
    throw error;
  }
};

export default fetchCurrency;
