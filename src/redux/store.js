import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedAuthReducer } from './persist/persist-reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import transactionsReducer from './transactions/transactions-slice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transaction: transactionsReducer,
    //
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
