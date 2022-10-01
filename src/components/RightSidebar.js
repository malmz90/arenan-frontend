import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { removeUser } from '../redux/reducers/user'

export default function RightSidebar() {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    fetch('http://localhost:4000/logout', {
      method: 'GET',
      credentials: 'include',
    })
    navigate('/')
    dispatch(removeUser())
  }

  return (
    <ul class="relative">
      <li class="relative">
        <a
          class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          Sidenav link 1
        </a>
      </li>
      <li class="relative">
        <a
          class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          Sidenav link 2
        </a>
      </li>
      <li class="relative">
        <a
          class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          Sidenav link 2
        </a>
      </li>

      <div className="justify-end">
        {user && (
          <li>
            <button
              onClick={logout}
              className="text-xs font-medium text-gray-500 group-hover:text-gray-200"
            >
              Logout
            </button>
          </li>
        )}
      </div>
    </ul>
  )
}
