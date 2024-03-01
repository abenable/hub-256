import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import PostCard from "../../components/postcard/postcard";

const Layout = () => {
  const [cookie, , removeCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Hub-256</h1>
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
              <a href="/get-started">
                <button className="button-18 get-started" type="button">
                  Get Started
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <div className="intro-post">
          <h2 className="intro-title">Welcome to My Blog</h2>
          <p className="intro-text">
            This is a blog where you can read about various topics, including
            technology, programming, and more.
          </p>
          <button className="button-18">Start Reading</button>
        </div>
        <div className="post-section">
          <h3>Latest Posts</h3>
          <div className="latest-posts">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
        <div className="target-post">
          <div className="target-post-img">
            <img
              src="https://via.placeholder.com/150"
              alt="Post"
              className="post-card-image"
            />
          </div>
          <div className="target-post-content">
            <p>Management</p>
            <h3>How to Get Started with Blogging</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptas, quidem, doloribus, quos eum quae voluptate quod
              consectetur
            </p>
            <p>Read article</p>
          </div>
        </div>
        {cookie.authToken ? (
          <div>
            <p>Logged in</p>
            <button
              className="button-18"
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
            className="button-18"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </button>
        )}
      </main>
      {/* <div className="footer">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </div> */}
    </div>
  );
};

export default Layout;
