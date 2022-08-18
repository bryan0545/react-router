import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { Logout } from '../../components/logout';
import { privateRoutes } from '../../models';
import { RoutesWithNotFound } from '../../utilities';

const Home = lazy(() => import('./home/Home'));
const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate replace to={privateRoutes.DASHBOARD} />} />
      <Route path={`${privateRoutes.DASHBOARD}/*`} element={<Dashboard />} />
      <Route path={`${privateRoutes.HOME}/*`} element={<Home />} />
    </RoutesWithNotFound>
  );
};
export default Private;
