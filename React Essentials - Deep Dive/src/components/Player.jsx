import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditButton() {
        isEditing ? setIsEditing(false) : setIsEditing(true);
    }

    let playerName = <span className="player-name" >{name}</span>;
    if(isEditing) {
        playerName = <input type="text" required />
    }

    return <>
        <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    </>;
}