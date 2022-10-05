import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

const MainPage = () => {
  const gladiator = useSelector((state) => state.gladiator.gladiator)

  return <div className="flex flex-row">Main</div>
}
export default MainPage
