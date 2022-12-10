import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from 'services/api/api';

const createTransaction = createAsyncThunk(
  '/api/transactions',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.createTransaction(credentials);
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

const getCategory = createAsyncThunk(
  '/api/transactions/categories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    try {
      const { data } = await API.getCategories();
      return data;
    } catch (error) {}
  }
);

const operations = {
  getCategory,
  createTransaction,
};

export default operations;
