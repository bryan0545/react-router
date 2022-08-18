import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { privateRoutes, Roles } from '../models';
import { AppStore } from '../redux/store';

interface Props {
  rol: Roles;
}

const RoleGuard = ({ rol }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.rol === rol ? <Outlet /> : <Navigate replace to={privateRoutes.PRIVATE} />;

  return <div>rol.guard</div>;
};
export default RoleGuard;
