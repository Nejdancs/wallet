import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(authSelectors.getToken);

  if (!isLoggedIn && !token) {
    return <Navigate to={'login'} />;
  }

  return <Outlet />;
}
