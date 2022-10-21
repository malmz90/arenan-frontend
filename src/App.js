import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateGladiator from './pages/CreateGladiator';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Merchants from './components/Merchants';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

function App() {
	return (
		<Router>
			<div className="flex">
				<main className="flex-1">
					<div className="py-4">
						<div className="min-h-screen max-w-8xl mx-auto px-4 sm:px-16 md:px-20">
							<div className="flex flex-col min-h-screen">
								<div>
									<Header />
								</div>
								<div className="flex flex-row min-h-screen justify-between">
									<div className="w-1/4 border-2 ">
										<LeftSidebar />
									</div>
									<div className="w-2/4">
										<Routes>
											<Route
												path="/"
												element={<LoginPage />}
											/>
											<Route
												path="register"
												element={<Register />}
											/>
											<Route
												path="main"
												element={<MainPage />}
											/>
											<Route
												path="merchants"
												element={<Merchants />}
											/>
											<Route
												path="create/gladiator"
												element={<CreateGladiator />}
											/>
											<Route
												path="main/merchants"
												element={<Merchants />}
											></Route>
										</Routes>
									</div>
									<div className="w-1/4 border-2">
										<RightSidebar />
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</Router>
	);
}
export default App;
