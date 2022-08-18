import './App.css';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes, Roles } from './models';
import { AuthGuard, RoleGuard } from './guards';
import { RoutesWithNotFound } from './utilities';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Logout } from './components/logout';
import { Dashboard } from './pages/private';

const Login = lazy(() => import('./pages/login/Login'));
const Private = lazy(() => import('./pages/private/Private'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={privateRoutes.PRIVATE} />} />
              <Route path={publicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route path={`${privateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={`${privateRoutes.DASHBOARD}/*`} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
