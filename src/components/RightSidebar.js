import { useSelector } from "react-redux";

export default function RightSidebar() {
  const user = useSelector((state) => state.user.user);
  const character = useSelector((state) => state.character.character);

  return (
    <div>
      {user && character && (
        <ul className="flex flex-col">
          <li className="flex">
            <a
              className="flex items-center px-2 py-1  m-4 text-sm text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 1
            </a>
          </li>
          <li className="flex">
            <a
              className="flex items-center px-2 py-1  m-4 text-sm text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
          <li className="flex">
            <a
              className="flex items-center px-2 py-1  m-4 text-sm text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
