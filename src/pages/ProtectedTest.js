import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const ProtectedTest = () => {
  const user = useSelector((state) => state.user.user)
  console.log(user)
  useEffect(() => {
    fetch('http://localhost:4000/protected', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log('error', e))
  })

  return <div>You made it</div>
}
export default ProtectedTest
