import { Route, Routes } from 'react-router-dom';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Container from './Container/Container';
import Balance from './Balance/Balance';
import Loader from './Loader/Loader';
import Header from './Header/Header'

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Balance />
              <Loader />
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
  );
};
