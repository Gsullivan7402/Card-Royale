import React, { useState } from "react";
import App from "./Leaderboard/app";  // Ensure this path is correct
import List from './Leaderboard/list';
import item from './Leaderboard/item';

function ToggleLeaderboard( ) {
  //const [isLeaderboardVisible, setIsLeaderboardVisible] = useState(false);

  //const toggleLeaderboardVisibility = () => {
   // setIsLeaderboardVisible(prevState => !prevState);
  //};

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-green-100 shadow-xl rounded-lg p-4">
      <h1 className="text-lg font-bold text-green-800 text-center">Leaderboard of Champions!</h1>
      <div className="overflow-auto">
        <App />
      </div>
    </div>
  );
}
export default ToggleLeaderboard;
