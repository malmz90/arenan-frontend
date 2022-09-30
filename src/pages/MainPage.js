import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

const MainPage = () => {
  const gladiator = useSelector((state) => state.gladiator.gladiator)
  console.log('main', gladiator)

  return (
    <div className="flex flex-row">
      <div className="w-1/4 flex flex-col">
        <h1 className="text-xl">Arenan</h1>
        <a>Köpmän</a>
        <a>Gladiatorer</a>
      </div>

      <div className="w-2/4"></div>
      <div className="w-1/4">column 3</div>
    </div>
  )
}
export default MainPage
