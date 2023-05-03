import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateGladiator from "./pages/CreateGladiator";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Merchants from "./components/Merchants";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <Router>
      <div className="min-h-screen max-w-8xl">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="main" element={<MainPage />} />
          <Route path="merchants" element={<Merchants />} />
          <Route path="create/gladiator" element={<CreateGladiator />} />
          <Route path="main/merchants" element={<Merchants />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
