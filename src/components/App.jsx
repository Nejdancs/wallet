import { Route, Routes } from 'react-router-dom';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Balance from './Balance/Balance';
import Header from 'components/Header'

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Balance />
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
  );
};
