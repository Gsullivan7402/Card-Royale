import React, { useState } from 'react';
import Header from './Header';
import Gamefield from './Gamefield';
import Leaderboard from './Leaderboard/app'; // Assuming 'Leaderboard' is imported correctly

export default function ParentComponent() {
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    const toggleLeaderboard = () => {
        setShowLeaderboard(!showLeaderboard);
    };

    return (
        <div className="parent-container">
            <Header toggleLeaderboard={toggleLeaderboard} />
            <Gamefield showLeaderboard={showLeaderboard} />
            {showLeaderboard && <Leaderboard />}
        </div>
    );
}
