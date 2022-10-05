import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { removeGladiator } from '../redux/reducers/gladiator'
import { removeUser } from '../redux/reducers/user'

export default function LeftSidebar() {
  const user = useSelector((state) => state.user.user)
  const gladiator = useSelector((state) => state.gladiator.gladiator)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    fetch('http://localhost:4000/logout', {
      method: 'GET',
      credentials: 'include',
    })
    navigate('/')
    dispatch(removeUser())
    dispatch(removeGladiator())
  }

  return (
    <div>
      {user && gladiator && (
        <ul class="flex flex-col">
          <li class="flex">
            <a
              class="flex items-center px-2 py-1 m-4 text-sm text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 1
            </a>
          </li>
          <li class="flex">
            <a
              class="flex items-center px-2 py-1  m-4 text-sm text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
          <li class="flex">
            <a
              class="flex items-center px-2 py-1  m-4 text-sm text-gray-700 text-ellipsis rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
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
      )}
    </div>
  )
}
