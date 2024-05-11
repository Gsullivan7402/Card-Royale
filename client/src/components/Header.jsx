import React from 'react';
import Button from './Button';
import Auth from '../utils/auth';
import Login from './Login';


const Header = () => {
  return (
    <div className='bg-green-800 relative' >
      <h1 className='font-sans text-4xl text-center text-white'>Card Royale</h1>
      {Auth.loggedIn() ? (

        <Button
          onClick={Auth.logout}
          className="w-40 ml-6 py-2 px-4 rounded bg-black text-white font-bold flex justify-center absolute right-4 top-4"
        >
          Log Out
        </Button>

      ) : (
        <Login />
      )
      }
    </div>


  )
}

export default Header;