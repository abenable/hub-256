import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import About from "./pages/about/about";

const App = () => {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
