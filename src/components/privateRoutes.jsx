// PrivateRoute.jsx
import { useNavigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ auth: { isAuthenticated } }) => {
  const navigate = useNavigate();
  return isAuthenticated ? <Outlet /> : navigate('/login');
};

export default PrivateRoutes;
