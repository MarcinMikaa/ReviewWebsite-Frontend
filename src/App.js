import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddPage from "./pages/AddPage/AddPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
