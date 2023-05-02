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
      <div className="bg-custom-background bg-no-repeat bg-cover h-screen">
        <div className="min-h-screen max-w-8xl mx-auto px-4 sm:px-16 md:px-20 object-cover">
          <div className="flex">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="register" element={<Register />} />
              <Route path="main" element={<MainPage />} />
              <Route path="merchants" element={<Merchants />} />
              <Route path="create/gladiator" element={<CreateGladiator />} />
              <Route path="main/merchants" element={<Merchants />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
