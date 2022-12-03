import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { lazy } from 'react';
import Container from './Container/Container';
import Balance from './Balance/Balance';
import Currency from './Currency/Currency';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import LoginPage from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <DashboardPage /> */}
                {/* <Loader /> */}
              </>
            }
          />

          {/* <Route path="/" element={<DashboardPage />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeTab />} />
        <Route path="/diagram" element={<DiagramTab />} />
        <Route path="/currency" element={<Currency />} />
      </Route>

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />

      <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="/signin" element={<LoginPage />} />
          {/* <Route path="/signup" element={<SignIn />} /> */}
        </Routes>
      </Container>
    </>
  );
};
