import persistReducer from 'redux-persist/es/persistReducer';
import authReducer from '../auth/auth-slice';
import { persistAuthConfig } from './persistConfig';

export const persistedAuthReducer = persistReducer(
  persistAuthConfig,
  authReducer
);
