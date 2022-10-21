import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGladiator } from '../redux/reducers/gladiator';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateGladiator = () => {
	const [newGladiator, setNewGladiator] = useState({
		name: '',
		strength: 0,
		race: '',
		agility: 0,
		health: 0,
	});
	const gladiator = useSelector((state) => state.gladiator.gladiator);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleData = (gladiator) => {
		if (!gladiator) {
			return;
		}
		dispatch(setGladiator(gladiator));
		navigate('/main');
	};

	const saveGladiator = (e) => {
		e.preventDefault();
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
			.catch((e) => console.log('error', e));
	};

	return gladiator ? (
		<div>A gladiator already exists</div>
	) : (
		<div className="px-4 flex flex-col">
			<div className="mb-8">
				<h1 className="text-xl font-bold text-gray-800">
					Create gladiator
				</h1>
				<p className="text-sm text-gray-600">
					Welcome to the arena and god luck !
				</p>
			</div>
			<div className="mb-8">
				<div className="mb-2 border-b-2 text-lg text-gray-800 font-bold">
					1. Name
				</div>
				<div className="text-gray-600">
					Choose a name for your gladiator
				</div>
				<input
					type="text"
					className=" px-2 mt-1shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
					onChange={(input) => {
						setNewGladiator({
							...newGladiator,
							name: input.target.value,
						});
					}}
					value={newGladiator.name}
				/>
			</div>
			<div>
				<div className="mb-2 border-b-2 text-lg text-gray-800 font-bold">
					2. Race
				</div>
				<select
					className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
					value={newGladiator.race}
					onChange={(e) =>
						setNewGladiator({
							...newGladiator,
							race: e.target.value,
						})
					}
				>
					<option>Dwarf</option>
					<option>Elf</option>
					<option>Human</option>
					<option>Ork</option>
				</select>
			</div>
			<label>Strength</label>
			<input
				type="text"
				className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
				placeholder="0"
				onChange={(input) => {
					setNewGladiator({
						...newGladiator,
						strength: input.target.value,
					});
				}}
				value={newGladiator.strength}
			/>

			<label>Agility</label>
			<input
				type="text"
				className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
				placeholder="0"
				onChange={(input) => {
					setNewGladiator({
						...newGladiator,
						agility: input.target.value,
					});
				}}
				value={newGladiator.agility}
			/>
			<label>Health</label>
			<input
				type="text"
				className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
				placeholder="0"
				onChange={(input) => {
					setNewGladiator({
						...newGladiator,
						health: input.target.value,
					});
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
	);
};
export default CreateGladiator;
