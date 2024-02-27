// PrivateRoute.jsx
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return navigate('/login');
  }

  return children;
};

export default PrivateRoute;
