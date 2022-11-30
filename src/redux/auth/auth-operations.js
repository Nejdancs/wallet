import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const signUp = createAsyncThunk();

const signIn = createAsyncThunk();

const logOut = createAsyncThunk();

const fetchCurrentUser = createAsyncThunk();

const operations = {
  signUp,
  signIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
