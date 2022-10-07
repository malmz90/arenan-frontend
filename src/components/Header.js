import { useNavigate } from 'react-router-dom'
import { removeUser } from '../redux/reducers/user'
import { useDispatch, useSelector } from 'react-redux'
const Header = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className="border-2 flex justify-center mb-4">
      <h1 className="">Arenan</h1>
    </div>
  )
}
export default Header
