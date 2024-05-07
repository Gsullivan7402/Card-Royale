import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import List from './list'; 

function App() {
  const [users, setUsers] = useState([]);

  const incrementWins = (userID) => {
    const updatedUsers = users.map(user =>
      user.userID === userID ? { ...user, wins: user.wins + 1 } : user
    );
    setUsers(updatedUsers);
  };

  useEffect(() => {
    setUsers([
      { userID: '1', displayName: 'Alice', wins: 5, picture: '/path/to/alice.jpg' },
      { userID: '2', displayName: 'Bob', wins: 3, picture: '/path/to/bob.jpg' }
    ]);
  }, []);

  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <List users={users} />
      <button onClick={() => incrementWins('1')}>Increment Wins for Alice</button>
    </div>
  );
}

// Find the root element
const rootElement = document.getElementById('root');
// Create a root
const root = createRoot(rootElement);  // Create a root container from the element
// Initial render: Render the <App /> into the root container
root.render(<App />);

export default App;
