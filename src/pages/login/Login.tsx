import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { privateRoutes, Roles } from '../../models';
import { createUser } from '../../redux/states/user';
import { getMorty } from '../../services';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));
      navigate(`/${privateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>LOGIN</button>
    </div>
  );
};

export default Login;
