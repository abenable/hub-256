import "./layout.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [cookie, , removeCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">
          <strong>Hub-256</strong>
        </h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">Blogs</a>
            </li>
            <li className="nav-item">
              <a href="/about">About</a>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a href="/get-started">Get Started</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <p>hello world</p>
        {cookie.authToken ? (
          <div>
            <p>Logged in</p>
            <button
              onClick={() => {
                removeCookie("authToken");
                navigate("/");
              }}
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </button>
        )}
      </main>
      <footer className="footer">
        <p>&copy; 2022 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
