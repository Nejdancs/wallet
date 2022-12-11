import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from 'services/api/api';

const createTransaction = createAsyncThunk(
  'transaction/add',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await API.createTransaction(transaction);
      return data;
    } catch (error) {
      toast.error(`${error.response.message}`);

      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

const getCategory = createAsyncThunk('category/get', async (_, thunkAPI) => {
  // const state = thunkAPI.getState();

  try {
    const { data } = await API.getCategories();
    return data;
  } catch (error) {}
});

const operations = {
  getCategory,
  createTransaction,
};

export default operations;
