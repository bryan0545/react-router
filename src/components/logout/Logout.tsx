import { useNavigate } from 'react-router-dom';
import { publicRoutes } from '../../models';
import { resetUser, userKey } from '../../redux/states/user';
import { clearLocalStorage } from '../../utilities';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    clearLocalStorage(userKey);
    dispatch(resetUser());
    navigate(`/${publicRoutes.LOGIN}`, { replace: true });
  };
  return <button onClick={logout}>LOGOUT</button>;
};
export default Logout;
