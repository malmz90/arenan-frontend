import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const ProtectedTest = () => {
  const user = useSelector((state) => state.user.user)
  const [auth, setAuth] = useState(false)
  console.log('user', user)

  useEffect(() => {
    fetch('http://localhost:4000/verifyAuth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => (data.succes ? setAuth(true) : setAuth(false)))
      .catch((e) => console.log('error', e))
  })

  return (
    <div>{auth ? <div>Authenticated</div> : <div>Not Authenticated</div>}</div>
  )
}
export default ProtectedTest
