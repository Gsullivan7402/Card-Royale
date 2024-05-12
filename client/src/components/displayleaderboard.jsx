import React, { useState } from "react";
import App from "./Leaderboard/app";  // Ensure this path is correct

const ToggleLeaderboard = () => {
  const [isLeaderboardVisible, setIsLeaderboardVisible] = useState(false);

  const toggleLeaderboardVisibility = () => {
    setIsLeaderboardVisible(prevState => !prevState);
  };

  return (
    <div>
      <button
        onClick={toggleLeaderboardVisibility}
        className="w-40 ml-6 py-2 px-4 rounded bg-black text-white font-bold"
      >
        {isLeaderboardVisible ? 'Hide Leaderboard' : 'Show Leaderboard'}
      </button>
      {isLeaderboardVisible && <App />}
    </div>
  );
};

export default ToggleLeaderboard;
