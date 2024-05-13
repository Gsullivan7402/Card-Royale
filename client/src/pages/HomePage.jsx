import React from 'react';
import Gamefield from '../components/Gamefield_k';
import Login from '../components/Login';
import Auth from '../utils/auth';
import Button from '../components/Button';
import LeaderboardView from '../components/displayleaderboard';

function Homepage() {
    // Add event listener to handle body overflow
    React.useEffect(() => {
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Re-enable scrolling on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="h-screen w-full overflow-hidden bg-green-800">
            <Gamefield />
            <LeaderboardView />
        </div>
    );
}

export default Homepage;
