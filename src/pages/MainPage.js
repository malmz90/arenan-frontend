import { useSelector } from 'react-redux'

const MainPage = () => {
  const gladiator = useSelector((state) => state.gladiator.gladiator)
  console.log('main', gladiator)

  return <div>MainPAge</div>
}
export default MainPage
