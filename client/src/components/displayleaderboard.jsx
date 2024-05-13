import React, { useState } from 'react';
import List from './Leaderboard/list'; // Ensure this is the correct path and correct capitalization

function ToggleLeaderboard() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="relative top-[-250px] bg-transparent text-white font-semibold py-2 px-4 border border-black rounded hover:bg-black hover:text-green-200 active:bg-green-800 active:text-white active:border-green-800"
      >
        {isVisible ? 'Hide Leaderboard' : 'Show Leaderboard'}
      </button>
      {isVisible && <LeaderboardView />}
    </div>
  );
}

function LeaderboardView() {
  const users = [
    { userID: '1', displayName: 'Garrett ', wins: 300 },
    { userID: '2', displayName: 'John ', wins: 200 },
    { userID: '3', displayName: 'Devin ', wins: 100 },
  ];


  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-green-100 shadow-xl rounded-lg p-4">
      <h1 className="text-lg font-bold text-green-800 text-center">Leaderboard of Champions!</h1>
      <div className="overflow-auto">
        <List users={users} />
      </div>
    </div>
  );
}

export default ToggleLeaderboard;
