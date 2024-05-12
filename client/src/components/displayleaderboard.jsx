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
   <div className="w-40 h-100 bg-white">
    <App />
   </div>
  ); 
} 

export default ToggleLeaderboard;
