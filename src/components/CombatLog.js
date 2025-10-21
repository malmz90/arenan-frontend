import { useEffect, useState } from "react";

const CombatLog = ({ combatResult, onClose }) => {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [displayedLogs, setDisplayedLogs] = useState([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  const { combat, rewards } = combatResult;
  const isVictory = combat.winner?.id === combat.attacker.id;

  useEffect(() => {
    // Animate log entries one by one
    if (!combat.log || combat.log.length === 0) return;

    if (currentLogIndex < combat.log.length) {
      const timer = setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, combat.log[currentLogIndex]]);
        setCurrentLogIndex((prev) => prev + 1);
      }, 500); // Show one log entry every 500ms

      return () => clearTimeout(timer);
    } else {
      setAnimationComplete(true);
    }
  }, [currentLogIndex, combat.log]);

  const skipAnimation = () => {
    setDisplayedLogs(combat.log);
    setCurrentLogIndex(combat.log.length);
    setAnimationComplete(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-4 border-yellow-600">
        {/* Header */}
        <div
          className={`p-6 ${
            isVictory
              ? "bg-gradient-to-r from-green-600 to-green-800"
              : "bg-gradient-to-r from-red-600 to-red-800"
          }`}
        >
          <h2 className="text-3xl font-bold text-white text-center">
            {isVictory ? "🎉 VICTORY! 🎉" : "💀 DEFEAT 💀"}
          </h2>
          <p className="text-center text-white text-lg mt-2">
            {isVictory
              ? `${combat.attacker.name} emerges victorious!`
              : `${combat.opponent.name} has won the battle!`}
          </p>
        </div>

        {/* Combat Stats */}
        <div className="grid grid-cols-2 gap-4 p-6 bg-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">
              {combat.attacker.name}
            </h3>
            <div className="space-y-1 text-white">
              <p>Level: {combat.attacker.level}</p>
              <p className="text-red-400">
                HP: {combat.attacker.currentHP}/{combat.attacker.maxHP}
              </p>
              <div className="w-full bg-gray-600 rounded-full h-4 mt-2">
                <div
                  className="bg-green-500 h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      (combat.attacker.currentHP / combat.attacker.maxHP) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-red-400 mb-2">
              {combat.opponent.name}
            </h3>
            <div className="space-y-1 text-white">
              <p>Level: {combat.opponent.level}</p>
              <p className="text-red-400">
                HP: {combat.opponent.currentHP}/{combat.opponent.maxHP}
              </p>
              <div className="w-full bg-gray-600 rounded-full h-4 mt-2">
                <div
                  className="bg-green-500 h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      (combat.opponent.currentHP / combat.opponent.maxHP) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Combat Log */}
        <div className="p-6 bg-gray-900 overflow-y-auto max-h-96">
          <h3 className="text-xl font-bold text-white mb-4">⚔️ Battle Log</h3>
          <div className="space-y-2 font-mono text-sm">
            {displayedLogs.map((log, index) => (
              <div
                key={index}
                className={`p-2 rounded ${
                  log.includes("wins!")
                    ? "bg-yellow-600 text-white font-bold"
                    : log.includes("gained")
                    ? "bg-green-700 text-white"
                    : log.includes(combat.attacker.name)
                    ? "bg-blue-900 text-blue-200"
                    : "bg-red-900 text-red-200"
                } animate-fade-in`}
              >
                {log}
              </div>
            ))}
          </div>

          {!animationComplete && displayedLogs.length > 0 && (
            <button
              onClick={skipAnimation}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
            >
              ⏩ Skip Animation
            </button>
          )}
        </div>

        {/* Rewards */}
        {isVictory && rewards && animationComplete && (
          <div className="p-6 bg-gradient-to-r from-yellow-600 to-yellow-800">
            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              🏆 Rewards 🏆
            </h3>
            <div className="grid grid-cols-2 gap-4 text-white text-center">
              <div className="bg-black bg-opacity-30 rounded-lg p-3">
                <p className="text-sm text-gray-200">Experience</p>
                <p className="text-2xl font-bold text-blue-300">
                  +{rewards.experience} XP
                </p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-3">
                <p className="text-sm text-gray-200">Gold</p>
                <p className="text-2xl font-bold text-yellow-300">
                  +{rewards.gold}g
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Close Button */}
        {animationComplete && (
          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CombatLog;
