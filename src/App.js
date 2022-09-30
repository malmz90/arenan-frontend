import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import ProtectedTest from './pages/ProtectedTest'
import CreateGladiator from './pages/CreateGladiator'
import Register from './pages/Register'
import MainPage from './pages/MainPage'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from './redux/reducers/user'
import Merchants from './components/Merchants'

function App() {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  console.log(user)

  return (
    <Router>
      <div className="flex">
        <main className="flex-1">
          <div className="py-4">
            <div className="max-w-8xl mx-auto px-4 sm:px-16 md:px-20">
              <Header />
              <Routes>
                <Route path="main" element={<MainPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="protected" element={<ProtectedTest />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="create/gladiator" element={<CreateGladiator />} />
                <Route path="register" element={<Register />} />
                <Route path="main/merchants" element={<Merchants />}></Route>
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </Router>
  )
}
export default App
