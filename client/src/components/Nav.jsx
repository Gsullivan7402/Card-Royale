import React, { useState } from 'react';
import Login from './Login';
import ToggleLeaderboard from './displayleaderboard';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 p-4 lg:hidden">
      <button className="text-white" onClick={toggleMenu}>
        &#9776;
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-green-800 bg-opacity-75 cursor-pointer" onClick={toggleMenu}>
          <div className="bg-white p-4 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
            <Login />
            <ToggleLeaderboard />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
