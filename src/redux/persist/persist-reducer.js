import persistReducer from 'redux-persist/es/persistReducer';
import authReducer from '../auth/auth-slice';
import { authPersistConfig } from './persist-config';

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
