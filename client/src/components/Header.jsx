import React from 'react';
import Button from './Button';
<<<<<<< Updated upstream

const Header = () => {
  return (
    <div className='font-sans text-4xl text-center bg-green-800 text-white' >Card Royale</div>
    
    
  )
=======
import Auth from '../utils/auth';
import Login from './Login';
import toggleLeaderboard from './displayleaderboard'; // Ensure the correct file name and export

const Header = () => {
  return (
    <div className='bg-green-800 relative'>
      <h1 className='font-sans text-4xl text-center text-white'>Card Royale</h1>
      <div style={{ position: 'absolute', right: '50px', top: '10px' }}>
        
        {Auth.loggedIn() ? (
          <Button
            onClick={Auth.logout}
            className="w-40 ml-6 py-2 px-4 rounded bg-black text-white font-bold"
          >
            Log Out
          </Button>
        ) : (
          <Login />
        )}
      </div>
      <div style={{ position: 'absolute', left: '30px', top: '10px' }}>
      <Button
          onClick={toggleLeaderboard}
          className="w-40 ml-6 py-2 px-4 rounded bg-black text-white font-bold"
        >
          Toggle Leaderboard
        </Button>

      </div>
    </div>
  );
>>>>>>> Stashed changes
}

export default Header;
