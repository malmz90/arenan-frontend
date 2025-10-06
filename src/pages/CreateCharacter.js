import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCharacter } from "../redux/reducers/character";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateCharacter = () => {
  const classIdMap = {
    Barbarian: 1,
    Wizard: 2,
    Warlock: 3,
  };

  const initialValues = {
    name: "",
    class_id: classIdMap.Barbarian,
    gender: "Male",
    strength: 0,
    dexterity: 0,
    vitality: 0,
  };

  const [newCharacter, setNewCharacter] = useState(initialValues);
  const character = useSelector((state) => state.character.character);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleData = (character) => {
    if (!character) {
      return;
    }
    dispatch(setCharacter(character));
    navigate("/main");
  };

  const handleChange = (event) => {
    setNewCharacter({
      ...newCharacter,
      gender: event.target.value,
    });
  };

  const saveCharacter = (e) => {
    console.log("new", newCharacter);
    e.preventDefault();
    fetch("http://localhost:4000/character/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newCharacter),
    })
      .then((res) => res.json())
      .then((data) => handleData(data))
      .catch((e) => console.log("error", e));
  };
  const notificationMethods = [
    { id: "male", title: "Male", value: "Male" },
    { id: "female", title: "Female", value: "Female" },
  ];

  const SectionTitle = ({ children }) => (
    <div className="mb-2 border-b-2 text-lg text-gray-200 font-bold">
      {children}
    </div>
  );

  // Check if character exists and has meaningful data (not just an empty object)
  const hasValidCharacter =
    character &&
    typeof character === "object" &&
    Object.keys(character).length > 0 &&
    character.id; // Assuming character should have an id

  return hasValidCharacter ? (
    <div>A character already exists</div>
  ) : (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200 px-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-100">Create Character</h1>
        <p className="text-sm text-gray-400">
          Welcome to the arena and good luck!
        </p>
      </div>
      <div className="mb-8">
        <SectionTitle>1. Name</SectionTitle>
        <div className="">Choose a name for your character</div>
        <input
          type="text"
          className="w-full max-w-xs px-2 mt-1shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
          onChange={(input) => {
            setNewCharacter({
              ...newCharacter,
              name: input.target.value,
            });
          }}
          value={newCharacter.name}
        />
      </div>
      <div className="mb-8">
        <SectionTitle>2. Class</SectionTitle>
        <select
          className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
          value={newCharacter.class_id}
          onChange={(e) =>
            setNewCharacter({
              ...newCharacter,
              class_id: classIdMap[e.target.value],
            })
          }
        >
          <option value="Barbarian">Barbarian</option>
          <option value="Wizard">Wizard</option>
          <option value="Warlock">Warlock</option>
        </select>
      </div>
      <div className="mb-8">
        <SectionTitle>3. Gender</SectionTitle>
        <div>
          <fieldset className="mt-4">
            <div className="space-y-4">
              {notificationMethods.map((notificationMethod) => (
                <div key={notificationMethod.id} className="flex items-center">
                  <input
                    id={notificationMethod.id}
                    name="notification-method"
                    type="radio"
                    value={notificationMethod.value}
                    onChange={handleChange}
                    defaultChecked={notificationMethod.id === "male"}
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
        <SectionTitle>4. Abilities</SectionTitle>

        <div className="flex flex-row ">
          <div className="flex flex-col mb-4">
            <div className="mb-2 border-b-2 text-lg text-gray-600 font-bold">
              Physique
            </div>
            <div className="mr-10">
              <label>Strength</label>
              <input
                type="number"
                min="0"
                className="w-full max-w-xs px-2 mt-1shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
                placeholder="0"
                onChange={(input) => {
                  setNewCharacter({
                    ...newCharacter,
                    strength: input.target.value,
                  });
                }}
                value={newCharacter.strength}
              />

              <label>Dexterity</label>
              <input
                type="number"
                min="0"
                className="w-full max-w-xs px-2 mt-1shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
                placeholder="0"
                onChange={(input) => {
                  setNewCharacter({
                    ...newCharacter,
                    dexterity: input.target.value,
                  });
                }}
                value={newCharacter.dexterity}
              />
              <label>vitality</label>
              <input
                type="number"
                min="0"
                className="w-full max-w-xs px-2 mt-1shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md mb-2 text-sm font-medium text-gray-900"
                placeholder="0"
                onChange={(input) => {
                  setNewCharacter({
                    ...newCharacter,
                    vitality: input.target.value,
                  });
                }}
                value={newCharacter.vitality}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        className="inline-flex items-center px-3 py-2 border border-red-500 shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 ml-2"
        onClick={saveCharacter}
      >
        Save character
      </button>
    </div>
  );
};
export default CreateCharacter;
