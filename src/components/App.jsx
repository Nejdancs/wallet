import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import Container from './Container/Container';
import Balance from './Balance/Balance';
// import Currency from './Currency/Currency';
import Loader from './Loader/Loader';
import Header from './Header/Header';
// import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
// import LoginPage from 'pages/AuthenticationPage/LoginPage';
// import RegisterPage from 'pages/AuthenticationPage/RegistrationPage';
import Media from 'react-media';
// import HomeTab from './HomeTab/HomeTab';
import ButtonAddTransactions from './ButtonAddTransactions/ButtonAddTransactions';
import operations from 'redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const DiagramTab = lazy(() => import('components/DiagramTab/DiagramTab'));
const HomeTab = lazy(() => import('components/HomeTab/HomeTab'));
const Currency = lazy(() => import('components/Currency/Currency'));
const LoginPage = lazy(() => import('pages/AuthenticationPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('pages/AuthenticationPage/RegistrationPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isRefreshingUser
  );

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={5000} pauseOnHover theme="colored" />
      {!isFetchingCurrentUser && (
        <Suspense fallback={null}>
          <Routes>
            {/* <Route element={<PrivateRoute />}> */}
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
            {/* </Route> */}

            {/* <Route element={<PublicRoute />}> */}
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* </Route> */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {/* <ButtonAddTransactions /> */}
        </Suspense>
      )}
    </>
  );
};
