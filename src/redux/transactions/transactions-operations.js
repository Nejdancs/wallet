import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from 'services/api/api';

const tok =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTUwMWRmNzQwN2Y1ZGM3ZTIzYWM3NSIsImVtYWlsIjoidXNlcjIwMEBleGFtcGxlLmNvbSIsImlhdCI6MTY3MDcwOTcyNywiZXhwIjoxNjcwNzk2MTI3fQ.QjQNIU2B73Vzv4tlKj6YdxXat-MhB-rZVi4uJPnXqq';

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
      token.set(`Bear ${tok}`);
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
