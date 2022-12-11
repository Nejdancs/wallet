import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/api/api';
import { toast } from 'react-toastify';

const createTransaction = createAsyncThunk(
  'transaction/add',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await API.createTransaction(transaction);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

const getTransactions = createAsyncThunk(
  'transaction/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.getTransaction();
      return data;
    } catch (error) {
      toast.error('Cant connect to server');

      return thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

const getCategory = createAsyncThunk('category/get', async (_, thunkAPI) => {
  try {
    const { data } = await API.getCategories();
    return data;
  } catch (error) {
    toast.error('Cant connect to server');
    return thunkAPI.rejectWithValue(error.response.message);
  }
});

const operations = {
  getCategory,
  createTransaction,
  getTransactions,
};

export default operations;
