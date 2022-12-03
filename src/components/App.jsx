import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { lazy } from 'react';
import Container from './Container/Container';
import Balance from './Balance/Balance';
import Currency from './Currency/Currency';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import Media from 'react-media';
import HomeTab from './HomeTab/MobileTab/MobileTab';
import ButtonAddTransactions from './ButtonAddTransactions/ButtonAddTransactions';

const DiagramTab = lazy(() => import('./DiagramTab/DiagramTab'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
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

        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ButtonAddTransactions />
    </>
  );
};
