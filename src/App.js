import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? 'Loading...' : data}</p>
      </header>
    </div>
  )
}
export default App
