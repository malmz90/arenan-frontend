import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";
import CombatLog from "../components/CombatLog";
import { getAllCharacters, startFight, getMyStats } from "../api/api";
import { useDispatch } from "react-redux";
import { setCharacter } from "../redux/reducers/character";

const Arena = () => {
  const character = useSelector((state) => state.character.character);
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [combatResult, setCombatResult] = useState(null);
  const [fighting, setFighting] = useState(false);
  const [selectedOpponent, setSelectedOpponent] = useState(null);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      const data = await getAllCharacters();
      const otherCharacters = data.filter((char) => char.id !== character?.id);
      setCharacters(otherCharacters);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load characters:", error);
      setLoading(false);
    }
  };

  const handleFight = async (opponentId, opponentName) => {
    setFighting(true);
    setSelectedOpponent(opponentName);
    setCombatResult(null);

    try {
      const result = await startFight(opponentId);
      setCombatResult(result);
    } catch (error) {
      console.error("Fight failed:", error);
      alert("Failed to start fight. Please try again.");
    } finally {
      setFighting(false);
      setSelectedOpponent(null);
    }
  };

  const closeCombatLog = async () => {
    setCombatResult(null);
    // Reload character stats to refresh rounds after combat
    try {
      const data = await getMyStats();
      if (data && data.character) {
        // Merge the few identity fields we show in Arena with the latest rounds
        dispatch(
          setCharacter({
            ...character,
            ...data.character,
          })
        );
      }
    } catch (e) {
      console.error("Failed to refresh character stats", e);
    }
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-900">
      <LeftSidebar />

      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            ⚔️ Battle Arena ⚔️
          </h1>

          {character && (
            <div className="bg-gray-800 rounded-lg p-6 mb-8 border-2 border-yellow-500">
              <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                Your Champion
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                <div>
                  <span className="text-gray-400">Name:</span>
                  <p className="font-bold">{character.name}</p>
                </div>
                <div>
                  <span className="text-gray-400">Level:</span>
                  <p className="font-bold">{character.level}</p>
                </div>
                <div>
                  <span className="text-gray-400">Gold:</span>
                  <p className="font-bold text-yellow-400">{character.gold}g</p>
                </div>
                <div>
                  <span className="text-gray-400">Experience:</span>
                  <p className="font-bold text-blue-400">
                    {character.experience} XP
                  </p>
                </div>
              </div>
            </div>
          )}

          <h2 className="text-3xl font-bold text-white mb-6">
            Available Opponents
          </h2>

          {loading ? (
            <div className="text-center text-white text-xl">
              Loading opponents...
            </div>
          ) : characters.length === 0 ? (
            <div className="text-center text-gray-400 text-xl">
              No opponents available at the moment.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((opponent) => (
                <div
                  key={opponent.id}
                  className="bg-gray-800 rounded-lg p-6 border-2 border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {opponent.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {opponent.class_name}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4 text-white">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Level:</span>
                      <span className="font-bold">{opponent.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Strength:</span>
                      <span className="font-bold text-red-400">
                        {opponent.strength}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Vitality:</span>
                      <span className="font-bold text-green-400">
                        {opponent.vitality}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Dexterity:</span>
                      <span className="font-bold text-blue-400">
                        {opponent.dexterity}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleFight(opponent.id, opponent.name)}
                    disabled={fighting}
                    className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all duration-300 ${
                      fighting && selectedOpponent === opponent.name
                        ? "bg-yellow-600 cursor-wait"
                        : fighting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700 hover:shadow-lg"
                    }`}
                  >
                    {fighting && selectedOpponent === opponent.name
                      ? "⚔️ Fighting..."
                      : "⚔️ Challenge"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Combat Log Modal */}
      {combatResult && (
        <CombatLog combatResult={combatResult} onClose={closeCombatLog} />
      )}
    </div>
  );
};

export default Arena;
