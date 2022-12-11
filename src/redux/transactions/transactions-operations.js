import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/api/api';

const createTransaction = createAsyncThunk(
  'transaction/add',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await API.createTransaction(transaction);
      return data;
    } catch (error) {
      const {
        response: {
          status,
          data: { message },
        },
      } = error;

      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);

const getCategory = createAsyncThunk('category/get', async (_, thunkAPI) => {
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
