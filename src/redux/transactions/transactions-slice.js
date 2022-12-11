import { createSlice } from '@reduxjs/toolkit';
import options from './transactions-operations';

const initialState = {
  transactions: {
    trans: [],
    loading: false,
  },
  category: {
    categories: [],
    loading: false,
  },
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [options.getCategory.pending]: state => {
      state.category.loading = true;
    },
    [options.getCategory.fulfilled]: (state, { payload }) => {
      state.category.categories = payload;
      state.category.loading = false;
    },
    [options.getCategory.rejected]: state => {
      state.category.loading = false;
    },
    [options.createTransaction.pending]: state => {
      state.transactions.loading = true;
    },
    [options.createTransaction.fulfilled]: (state, { payload }) => {
      state.transactions.trans.unshift(payload);
      state.transactions.loading = false;
    },
    [options.createTransaction.rejected]: state => {
      state.transactions.loading = false;
    },
    [options.getTransactions.pending]: state => {
      state.transactions.loading = true;
    },
    [options.getTransactions.fulfilled]: (state, { payload }) => {
      state.transactions.trans = payload;
      state.transactions.loading = false;
    },
    [options.getTransactions.rejected]: state => {
      state.transactions.loading = false;
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
