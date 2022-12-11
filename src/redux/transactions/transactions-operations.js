import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from 'services/api/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const createTransaction = createAsyncThunk(
  'transaction/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.createTransaction(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Something went wrong! Please, try again');
      const {
        response: { status },
      } = error;
      return thunkAPI.rejectWithValue(status);
    }
  }
);

const getCategory = createAsyncThunk('category/get', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);

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
