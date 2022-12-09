import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(authSelectors.getToken);
  const location = useLocation();
  const savedLocation = useRef(location.pathname);

  if (!isLoggedIn) {
    return <Navigate to={token ? savedLocation.current : 'login'} />;
  }

  return <Outlet />;
}
