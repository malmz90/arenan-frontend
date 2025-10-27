import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { removeCharacter } from "../redux/reducers/character";
import { removeUser } from "../redux/reducers/user";

export default function LeftSidebar() {
  const user = useSelector((state) => state.user.user);
  const character = useSelector((state) => state.character.character);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      method: "GET",
      credentials: "include",
    });
    navigate("/");
    dispatch(removeUser());
    dispatch(removeCharacter());
  };

  return (
    <div className="bg-gray-900 text-white sm:w-64 w-full h-screen space-y-6 py-7 px-2 absolute sm:relative bg-gray-800 shadow overflow-auto">
      {user && character && (
        <ul className="space-y-2">
          {/* Character Image and Health */}
          <li className="flex flex-col items-center">
            <img
              src="public\logo192.png"
              className="w-32 h-32 object-cover rounded-full"
            />
            <p className="text-sm font-medium mt-2">
              Health: {character.current_health}/{character.max_health}
            </p>
            <p className="text-sm font-medium mt-1">
              Rounds: {character.current_rounds}/{character.max_rounds}
            </p>
          </li>

          {/* Navigation Links */}
          <li>
            <Link to="/arena">
              <a className="flex font-bold items-center px-2 py-1 m-4 text-sm text-gray-200 rounded hover:text-gray-300 hover:bg-gray-700 transition duration-300 ease-in-out">
                ⚔️ Arena
              </a>
            </Link>
          </li>
          <li>
            <Link to="/merchants">
              <a className="flex font-bold items-center px-2 py-1 m-4 text-sm text-gray-200 rounded hover:text-gray-300 hover:bg-gray-700 transition duration-300 ease-in-out">
                Market
              </a>
            </Link>
          </li>
          <li>
            <Link to="/equipment">
              <a className="flex font-bold items-center px-2 py-1 m-4 text-sm text-gray-200 rounded hover:text-gray-300 hover:bg-gray-700 transition duration-300 ease-in-out">
                Equipment
              </a>
            </Link>
          </li>

          {/* Logout Button */}
          <li className="mt-auto">
            <button
              onClick={logout}
              className="w-full text-xs font-medium text-gray-200 hover:text-white py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
