import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../store/contexts/user.context';
import { IAuthRouteProps } from './authRoute.interface';

export function AuthRoute({ children }: IAuthRouteProps) {
  const location = useLocation();
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }

  return children;
}
