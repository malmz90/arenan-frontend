import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGladiator } from '../redux/reducers/gladiator';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateGladiator = () => {
	const initialValues = {
		name: '',
		race: 'Dwarf',
		gender: 'Male',
		strength: 0,
		agility: 0,
		health: 0,
		axe: 0,
		sword: 0,
		hammer: 0,
		staff: 0,
		shield: 0,
		spear: 0,
		chain: 0,
		initiative: 0,
		dodge: 0,
	};
	const [newGladiator, setNewGladiator] = useState(initialValues);
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
	console.log(newGladiator);

	const handleChange = (event) => {
		setNewGladiator({
			...newGladiator,
			gender: event.target.value,
		});
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
	const notificationMethods = [
		{ id: 'male', title: 'Male', value: 'Male' },
		{ id: 'female', title: 'Female', value: 'Female' },
	];
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
			<div className="mb-8">
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
			<div className="mb-8">
				<div className="mb-2 border-b-2 text-lg text-gray-800 font-bold">
					3. Gender
				</div>
				<div>
					<fieldset className="mt-4">
						<div className="space-y-4">
							{notificationMethods.map((notificationMethod) => (
								<div
									key={notificationMethod.id}
									className="flex items-center"
								>
									<input
										id={notificationMethod.id}
										name="notification-method"
										type="radio"
										value={notificationMethod.value}
										onChange={handleChange}
										defaultChecked={
											notificationMethod.id === 'male'
										}
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
									/>
									<label
										htmlFor={notificationMethod.id}
										className="ml-3 block text-sm font-medium text-gray-700"
									>
										{notificationMethod.title}
									</label>
								</div>
							))}
						</div>
					</fieldset>
				</div>
			</div>
			<div className="mb-8">
				<div className="mb-2 border-b-2 text-lg text-gray-800 font-bold">
					4. Abilities
				</div>

				<div className="flex flex-row ">
					<div className="flex flex-col mb-4">
						<div className="mb-2 border-b-2 text-lg text-gray-600 font-bold">
							Physique
						</div>
						<div className="mr-10">
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
						</div>
						<div>
							<div className="mb-2 border-b-2 text-lg text-gray-600 font-bold">
								Speed
							</div>

							<label>Initiative</label>
							<input
								type="text"
								className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
								placeholder="0"
								onChange={(input) => {
									setNewGladiator({
										...newGladiator,
										initiative: input.target.value,
									});
								}}
								value={newGladiator.initiative}
							/>
							<label>Dodge</label>
							<input
								type="text"
								className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
								placeholder="0"
								onChange={(input) => {
									setNewGladiator({
										...newGladiator,
										dodge: input.target.value,
									});
								}}
								value={newGladiator.dodge}
							/>
						</div>
					</div>
					<div>
						<div className="mb-2 border-b-2 text-lg text-gray-600 font-bold">
							Weapontype
						</div>
						<label>Axe</label>
						<input
							type="text"
							className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
							placeholder="0"
							onChange={(input) => {
								setNewGladiator({
									...newGladiator,
									axe: input.target.value,
								});
							}}
							value={newGladiator.axe}
						/>
						<label>Sword</label>
						<input
							type="text"
							className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
							placeholder="0"
							onChange={(input) => {
								setNewGladiator({
									...newGladiator,
									sword: input.target.value,
								});
							}}
							value={newGladiator.sword}
						/>
						<label>Staff</label>
						<input
							type="text"
							className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
							placeholder="0"
							onChange={(input) => {
								setNewGladiator({
									...newGladiator,
									staff: input.target.value,
								});
							}}
							value={newGladiator.staff}
						/>{' '}
						<label>Shield</label>
						<input
							type="text"
							className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
							placeholder="0"
							onChange={(input) => {
								setNewGladiator({
									...newGladiator,
									shield: input.target.value,
								});
							}}
							value={newGladiator.shield}
						/>{' '}
						<label>Spear</label>
						<input
							type="text"
							className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
							placeholder="0"
							onChange={(input) => {
								setNewGladiator({
									...newGladiator,
									spear: input.target.value,
								});
							}}
							value={newGladiator.spear}
						/>{' '}
						<label>chain</label>
						<input
							type="text"
							className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
							placeholder="0"
							onChange={(input) => {
								setNewGladiator({
									...newGladiator,
									chain: input.target.value,
								});
							}}
							value={newGladiator.chain}
						/>{' '}
						<label>Hammer</label>
						<input
							type="text"
							className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
							placeholder="0"
							onChange={(input) => {
								setNewGladiator({
									...newGladiator,
									hammer: input.target.value,
								});
							}}
							value={newGladiator.hammer}
						/>
					</div>
				</div>
			</div>

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
