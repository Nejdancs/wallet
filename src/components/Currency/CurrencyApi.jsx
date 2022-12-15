import axios from 'axios';

const fetchCurrency = async () => {
  try {
    const { data } = await axios.get(
      'https://wallet-api-nnb3.onrender.com/api/currency'
    );

    localStorage.setItem('currencyData', JSON.stringify(data.data.currency));
  } catch (error) {
    throw error;
  }
};

export default fetchCurrency;
