import React from 'react';
import Players from '../players/Players';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            numberOfPlayers : 0
        };

    }

    setNumberOfPlayers = (number) => {
        this.setState({ 
            numberOfPlayers : number 
        });
    }
    
    render() {
        return ( 
            <div>
                <h2>Game will go here</h2>
                <Players setPlayers={this.setNumberOfPlayers}/>
            </div>
        );
    }
}

