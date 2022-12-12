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

const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.signUp(credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      console.log(error);
      const {
        response: { status },
      } = error;
      return thunkAPI.rejectWithValue(status);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await API.logIn(credentials);

    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    const {
      response: { status },
    } = error;
    return thunkAPI.rejectWithValue(status);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await API.logOut;
    token.unset();
  } catch (error) {
    toast.error('Something went wrong! Please, try again');
    const {
      response: { status },
    } = error;
    return thunkAPI.rejectWithValue(status);
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
      const { data } = await API.fetchCurrentUser();
      return data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue();
    }
  }
);

const operations = {
  signUp,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
