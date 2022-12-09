import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-api-nnb3.onrender.com';

const signUp = async body => {
  const { data } = await axios.post('api/auth/signup', body);
  return data;
};

const logIn = async body => {
  const { data } = await axios.post('api/auth/login', body);
  return data;
};

const logOut = async () => {
  await axios.post('api/users/logout');
};

const fetchCurrentUser = async () => {
  const { data } = await axios.get('api/users/current');
  return data;
};

const getStatistics = async body => {
  const { data } = await axios.post('/api/transactions/statistics', body);
  return data;
};

const getTransaction = async () => {
  const { data } = await axios.get('/api/transactions');
  return data;
};

const createTransaction = async body => {
  const { data } = await axios.post('/api/transactions', body);
  return data;
};

const getCategories = async () => {
  const { data } = await axios.get('/api/transactions/categories');
  return data;
};

const addCategory = async body => {
  const { data } = await axios.post('/api/transactions/categories', body);
  return data;
};

const API = {
  signUp,
  logIn,
  logOut,
  fetchCurrentUser,
  getStatistics,
  getTransaction,
  createTransaction,
  getCategories,
  addCategory,
};

export default API;
