import { Route, Routes } from 'react-router-dom';
// import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
// import { lazy } from 'react';
import Balance from './Balance/Balance';
import Currency from './Currency/Currency';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Balance />
              <Currency />
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
      <Route path="/signin" element={<SignIn />} />

      <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
};
