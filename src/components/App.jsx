import { Route, Routes } from 'react-router-dom';
// import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
// import { lazy } from 'react';
import Container from './Container/Container';
import Balance from './Balance/Balance';
import Currency from './Currency/Currency';
// import Loader from './Loader/Loader';

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
                <Balance />
                <Currency />
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
      <Route path="/signin" element={<SignIn />} />

      <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Container>
    </>
  );
};
