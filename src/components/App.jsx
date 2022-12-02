import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import DiagramTab from './DiagramTab/DiagramTab';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<>Hello wallet</>} />

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
