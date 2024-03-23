import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import TestPage from "./pages/testpage/test";
import Index from "./pages/index";
import Login from "./pages/login/login";
import { NavbarMenu } from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="App">
      <NavbarMenu />
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
