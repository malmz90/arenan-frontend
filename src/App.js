import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateCharacter from "./pages/CreateCharacter";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import Merchants from "./components/Merchants";
import Arena from "./pages/Arena";

function App() {
  return (
    <Router>
      <div className="min-h-screen max-w-8xl">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="main" element={<MainPage />} />
          <Route path="merchants" element={<Merchants />} />
          <Route path="arena" element={<Arena />} />
          <Route path="create/character" element={<CreateCharacter />} />
          <Route path="main/merchants" element={<Merchants />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
