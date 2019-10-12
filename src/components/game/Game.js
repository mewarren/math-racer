import React from 'react';
import Players from '../players/Players';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state ={

        };

    }
    
    render() {
        return ( 
            <div>
                <h2>Game will go here</h2>
                <Players />
            </div>
        );
    }
}

export default Game;