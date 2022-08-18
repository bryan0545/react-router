import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { publicRoutes } from '../models';
import { AppStore } from '../redux/store';

const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name ? <Outlet /> : <Navigate replace to={publicRoutes.LOGIN} />;
};
export default AuthGuard;
