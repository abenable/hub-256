import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import About from "./pages/about/about";
import TestPage from "./pages/testpage/test";
import Index from "./pages/index";
import Login from "./pages/login/login";

const App = () => {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
};

export default App;
