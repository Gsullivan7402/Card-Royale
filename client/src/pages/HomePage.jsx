import React from 'react';
import Gamefield from '../components/Gamefield';
import Login from '../components/Login';
import Auth from '../utils/auth';
import Button from '../components/Button';
import LeaderboardView from '../components/displayleaderboard';

function Homepage() {
    return (
        <div className="h-screen w-full overflow-hidden bg-green-800">
           <Gamefield />
           <LeaderboardView />
            

        </div>
    );
}

export default Homepage;
