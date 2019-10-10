import React from 'react';
import './players.css';

class Players extends React.Component {
    render() {
        return(
            <div>
                <p>Select the number of players</p>
                <div className="selectPlayers">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>

            </div>
        );
    }
}

export default Players;