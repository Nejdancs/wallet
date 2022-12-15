import { createSlice } from '@reduxjs/toolkit';
import options from './transactions-operations';

const initialState = {
  transactions: [],
  category: [],
  loadingTrans: false,
  loadingAddTrans: false,
  loadingCat: false,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [options.getCategory.pending]: state => {
      state.loadingCat = true;
    },
    [options.getCategory.fulfilled]: (state, { payload }) => {
      state.category = payload;
      state.loadingCat = false;
    },
    [options.getCategory.rejected]: state => {
      state.loadingCat = false;
    },
    [options.createTransaction.pending]: state => {
      state.loadingAddTrans = true;
    },
    [options.createTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = payload.result.reverse();
      state.loadingAddTrans = false;
    },
    [options.createTransaction.rejected]: state => {
      state.loadingAddTrans = false;
    },
    [options.getTransactions.pending]: state => {
      state.loadingTrans = true;
    },
    [options.getTransactions.fulfilled]: (state, { payload }) => {
      state.transactions = payload.reverse();
      state.loadingTrans = false;
    },
    [options.getTransactions.rejected]: state => {
      state.loadingTrans = false;
    },
  },
});

export default transactionSlice.reducer;

// ---------------------------------------------------------

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const transactionApi = createApi({
//   reducerPath: 'transactionApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://wallet-api-nnb3.onrender.com',
//   }),
//   tagTypes: ['Transactions'],
//   endpoints: builder => ({
//     getCategory: builder.query({
//       query: () => '/api/transactions/categories',
//       providesTags: result =>
//         result
//           ? [...result.map(({ id }) => ({ type: 'Category', id })), 'Category']
//           : ['Category'],
//     }),
//     createTransaction: builder.mutation({
//       query: Transaction => ({
//         url: '/api/transactions',
//         method: 'POST',
//         body: Transaction,
//       }),
//       invalidatesTags: ['Category'],
//     }),
//   }),
// });

// export const { useGetCategoryQuery, useCreateTransactionMutation } =
//   transactionApi;
