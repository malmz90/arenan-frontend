import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setGladiator } from '../redux/reducers/gladiator'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateGladiator = () => {
  const [newGladiator, setNewGladiator] = useState({
    name: '',
    strength: 0,
    race: '',
    agility: 0,
    health: 0,
  })
  const gladiator = useSelector((state) => state.gladiator.gladiator)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log('glad', gladiator)
  const handleData = (gladiator) => {
    if (!gladiator) {
      return
    }
    dispatch(setGladiator(gladiator))
    navigate('/main')
  }

  const saveGladiator = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/gladiator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(newGladiator),
    })
      .then((res) => res.json())
      .then((data) => handleData(data))
      .catch((e) => console.log('error', e))
  }

  return gladiator ? (
    <div>A gladiator already exists</div>
  ) : (
    <div>
      <label>Name</label>
      <input
        type="text"
        className="mt-1 mb-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
        placeholder="..."
        onChange={(input) => {
          setNewGladiator({ ...newGladiator, name: input.target.value })
        }}
        value={newGladiator.name}
      />
      <label>Race</label>
      <input
        type="text"
        className="mt-1 mb-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
        placeholder="..."
        onChange={(input) => {
          setNewGladiator({ ...newGladiator, race: input.target.value })
        }}
        value={newGladiator.race}
      />
      <label>Strength</label>
      <input
        type="text"
        className="mt-1 mb-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
        placeholder="0"
        onChange={(input) => {
          setNewGladiator({ ...newGladiator, strength: input.target.value })
        }}
        value={newGladiator.strength}
      />

      <label>Agility</label>
      <input
        type="text"
        className="mt-1 mb-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
        placeholder="0"
        onChange={(input) => {
          setNewGladiator({ ...newGladiator, agility: input.target.value })
        }}
        value={newGladiator.agility}
      />
      <label>Health</label>
      <input
        type="text"
        className="mt-1 mb-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
        placeholder="0"
        onChange={(input) => {
          setNewGladiator({ ...newGladiator, health: input.target.value })
        }}
        value={newGladiator.health}
      />
      <button
        className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 ml-2"
        onClick={saveGladiator}
      >
        Save gladiator
      </button>
    </div>
  )
}
export default CreateGladiator
