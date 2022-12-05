import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://wallet-api-nnb3.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('api/auth/signup', credentials);
    token.set(data.token);
    toast.success(
      'Your registration has been successfully completed. You have just been sent an email containing membership activation instructions'
    );
    return data;
  } catch (error) {
    toast.error('Something went wrong! Please, try again');
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('api/auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Something went wrong! Please, try again');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('api/users/logout');
    token.unset();
  } catch (error) {
    toast.error('Something went wrong! Please, try again');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('api/users/current');
      return data;
    } catch (error) {}
  }
);

const operations = {
  signUp,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
