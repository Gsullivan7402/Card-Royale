import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import List from './list';  // Adjust import to correct capitalization if necessary
import userData from "./data/data.json";  // Ensure this points to your JSON file correctly

function App() {
  const [users, setUsers] = useState([]);

  const incrementWins = (userID) => {
    setUsers(currentUsers => currentUsers.map(user =>
      user.userID === userID ? { ...user, wins: user.wins + 1 } : user
    ));
  };

  useEffect(() => {
    // Load users from JSON file at the start
    setUsers(userData);
  }, []);

  const checkWinConditionAndIncrement = () => {
    // Example: Increment wins for the first user, assuming it's Alice
    incrementWins(users[0].userID);
  };

  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <List users={users} />
      <button onClick={checkWinConditionAndIncrement}>Simulate Win for Alice</button>
    </div>
  );
}

// Find the root element
const rootElement = document.getElementById('root');
if (rootElement) {
  // Create a root container from the element
  const root = createRoot(rootElement);
  // Initial render: Render the <App /> into the root container
  root.render(<App />);
}

export default App;
