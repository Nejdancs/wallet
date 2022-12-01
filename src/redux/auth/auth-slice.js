import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // Reducers
  },
});

export default authSlice.reducer;
