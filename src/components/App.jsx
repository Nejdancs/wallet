import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import Container from './Container/Container';
import Balance from './Balance/Balance';
import Currency from './Currency/Currency';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import LoginPage from 'pages/AuthenticationPage/LoginPage';
import RegisterPage from 'pages/AuthenticationPage/RegistrationPage';
import Media from 'react-media';
import HomeTab from './HomeTab/HomeTab';
import ButtonAddTransactions from './ButtonAddTransactions/ButtonAddTransactions';

const DiagramTab = lazy(() => import('./DiagramTab/DiagramTab'));

// const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

// const LoginPage = lazy(() => import('./pages/LoginPage'));

// const DashboardPage = lazy(() => import('pages/DashboardPage'));

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={5000} pauseOnHover theme="colored" />
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeTab />} />
          <Route path="diagram" element={<DiagramTab />} />
          <Route
            path="currency"
            element={
              <Media
                queries={{
                  small: '(max-width: 767px)',
                }}
              >
                {matches =>
                  matches.small ? <Currency /> : <Navigate to="/home" />
                }
              </Media>
            }
          />
        </Route>

        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <ButtonAddTransactions /> */}
    </>
  );
};
