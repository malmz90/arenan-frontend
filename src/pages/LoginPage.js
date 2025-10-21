import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/user";
import { setCharacter, removeCharacter } from "../redux/reducers/character";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = { email, password };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const handleData = ({ token, user, character }) => {
      if (!token) {
        return;
      }
      console.log("Full login response data:", { token, user, character });
      console.log("User:", user);
      console.log("Character:", character);

      if (user && character && character.id) {
        // Only set character if it has meaningful data (like an id)
        dispatch(setCharacter(character));
        dispatch(setUser(user));
        navigate("/main");
      } else if (user) {
        // User exists but no valid character, clear any old character and go to create
        dispatch(removeCharacter()); // Clear any persisted character from previous session
        dispatch(setUser(user));
        navigate("/create/character");
      }
    };

    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(loginUser),
    })
      .then((res) => res.json())

      .then((data) => handleData(data))

      .catch((e) => console.log("error", e));
  };

  return (
    <>
      <div className="bg-custom-background bg-no-repeat bg-cover h-screen">
        <div className="relative flex items-center justify-center h-screen">
          <h1
            className="absolute text-5xl sm:text-6xl md:text-7xl font-arena-font mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-red-900 to-gray-900"
            style={{
              top: "calc(15% - 2rem)",
              "@media (max-width: 640px)": { top: "calc(10% - 1rem)" },
            }}
          >
            Dark Arena
          </h1>
          <div className="bg-gray-800 bg-opacity-95 py-8 px-4 sm:px-10 shadow-xl border border-red-500 rounded-md">
            <form
              onSubmit={handleLogin}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-400"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-200 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sign in
                </button>
              </div>
              <div>
                <Link to="/register">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-200 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Create new account
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
