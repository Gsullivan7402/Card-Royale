import React, { useState } from "react";
import App from "./Leaderboard/app";

function toggleLeaderboard(){
    const [selected,setSelected]=useState('Leaderboard ON')

    const handleChange=(e)=>{
        console.log(e.target.value)
        setSelected(e.target.value)

    }

    return(
        <div>
            <select value={selected} onChange={(e)=>handleChange(e)}>
                <option>Leaderboard ON</option>
                <option>Leaderboard OFF</option>
            </select>
            {selected == "Leaderboard ON"?<App/>:"" }
        </div>
    )
}
export default toggleLeaderboard;