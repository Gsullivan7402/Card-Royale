import React from 'react';
import Button from './Button';
import Auth from '../utils/auth';
import Login from './Login';
import Nav from './Nav';


const Header  = () => {
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
        <Nav />
      </div>
      </div>
    
  );
};

export default Header;
