import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const signUp = createAsyncThunk();

const logIn = createAsyncThunk();

const logOut = createAsyncThunk();

const fetchCurrentUser = createAsyncThunk();

const operations = {
  signUp,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
