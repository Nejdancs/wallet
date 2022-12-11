import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from 'services/api/api';

const createTransaction = createAsyncThunk(
  'transaction/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.createTransaction(credentials);

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
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

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
