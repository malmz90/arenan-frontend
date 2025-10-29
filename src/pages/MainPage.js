import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";
import { getMyStats, allocateStats } from "../api/api";
import { setCharacter } from "../redux/reducers/character";

const MainPage = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character.character);

  const [strength, setStrength] = useState(0);
  const [vitality, setVitality] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const available = character?.unspent_stat_points || 0;
  const allocated = strength + vitality + dexterity;
  const remaining = Math.max(0, available - allocated);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMyStats();
        if (data && data.character) {
          dispatch(setCharacter({ ...character, ...data.character }));
        }
      } catch (e) {
        // no-op
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (allocated === 0) return;
    if (allocated > available) return;
    const res = await allocateStats({ strength, vitality, dexterity });
    if (res && res.character) {
      dispatch(setCharacter({ ...character, ...res.character }));
      setStrength(0);
      setVitality(0);
      setDexterity(0);
      alert("Stats allocated!");
    } else if (res && res.message) {
      alert(res.message);
    }
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-900">
      <LeftSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Main</h1>

        {character && character.unspent_stat_points > 0 && (
          <div className="bg-gray-800 border-2 border-yellow-500 rounded-lg p-6 max-w-xl">
            <h2 className="text-xl font-bold text-yellow-400 mb-2">
              Level Up! Distribute your stat points
            </h2>
            <p className="text-gray-300 mb-4">
              Available points: <span className="font-bold">{available}</span> |
              Remaining: {remaining}
            </p>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Strength
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={strength}
                    onChange={(e) =>
                      setStrength(Math.max(0, parseInt(e.target.value || 0)))
                    }
                    className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Vitality
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={vitality}
                    onChange={(e) =>
                      setVitality(Math.max(0, parseInt(e.target.value || 0)))
                    }
                    className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Dexterity
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={dexterity}
                    onChange={(e) =>
                      setDexterity(Math.max(0, parseInt(e.target.value || 0)))
                    }
                    className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={allocated === 0 || allocated > available}
                className={`px-4 py-2 rounded font-bold text-white ${
                  allocated === 0 || allocated > available
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-yellow-600 hover:bg-yellow-700"
                }`}
              >
                Allocate {allocated} point{allocated === 1 ? "" : "s"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default MainPage;
