import './layout.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const [cookie, setCookie, removeCookie] = useCookies(['authToken']);
  const navigate = useNavigate();

  return (
    <>
      <p>hello world</p>
      {cookie.authToken ? (
        <div>
          <p>Logged in</p>
          <button
            onClick={() => {
              removeCookie('authToken');
              navigate('/');
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          Sign in
        </button>
      )}
    </>
  );
};

export default Layout;
