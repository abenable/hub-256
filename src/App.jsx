import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

import "./App.css";
// import Home from './pages/index';
import Admin from "./pages/admin/admin";
import Layout from "./pages/layout/layout";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Login from "./pages/login/login";
import PrivateRoutes from "./components/privateRoutes";
import Comp from "./components/testing_comp/comp";

const App = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["authToken"]);

  return (
    <div className="App">
      {/* <Home />{' '} */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          element={<PrivateRoutes auth={cookie.authToken ? true : false} />}
        >
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="comp" element={<Comp />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
