import { createSlice } from '@reduxjs/toolkit';
import transactionOperations from './transactions-operations';

const initialState = {
  transaction: {
    type: '',
    category: '',
    total: 0,
    date: '',
    comment: '',
  },
  category: [],
  token: null,
  loading: false,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [transactionOperations.getCategory.pending](state) {
      state.loading = true;
    },
    [transactionOperations.getCategory.fulfilled](state, action) {
      state.category = action.payload.category;
      state.token = action.payload.token;
      state.loading = false;
    },
    [transactionOperations.getCategory.rejected](state) {
      state.loading = false;
    },
    [transactionOperations.createTransaction.pending](state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [transactionOperations.createTransaction.fulfilled](state, action) {
      state.transaction = {
        type: '',
        category: '',
        total: 0,
        date: '',
        comment: '',
      };
      state.token = action.payload.token;
      state.loading = false;
    },
    [transactionOperations.createTransaction.rejected](state) {
      state.loading = false;
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
