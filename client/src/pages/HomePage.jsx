import React from 'react';
import Gamefield from '../components/Gamefield_k';
import Login from '../components/Login';
import Auth from '../utils/auth';
import Button from '../components/Button';

function Homepage() {
    return (
        <div className="h-screen w-full overflow-hidden bg-green-800">
           <Gamefield />
            

        </div>
    );
}

export default Homepage;
