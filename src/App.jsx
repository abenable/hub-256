import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import NewsLetter from "./components/newsletter/newsletter";
import { NavbarMenu } from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="" element={<IndexPage />} />
      </Routes>
      <NewsLetter />
    </div>
  );
}
export default App;
