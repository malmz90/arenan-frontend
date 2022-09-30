import { useNavigate } from 'react-router-dom'
import { removeUser } from '../redux/reducers/user'
import { useDispatch, useSelector } from 'react-redux'
const Header = () => {
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
    <ul class="flex flex-row justify-between mb-2">
      <div className="flex flex-row">
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">
            Active
          </a>
        </li>
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li class="mr-6">
          <a class="text-gray-400 cursor-not-allowed" href="#">
            Disabled
          </a>
        </li>
      </div>
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
export default Header
