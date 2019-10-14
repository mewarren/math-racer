import React from 'react';
import Players from '../players/Players';
import Player from '../player/Player';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfPlayers : 0,
            players : {}
        };
    }

    setNumberOfPlayers = (number) => {
        this.setState({ 
            numberOfPlayers : parseInt(number) 
        });
    }

    addPlayerInfo = (name) => {
        console.log(name);
    }
    
    render() {
        return ( 
            <div>
                <Players playersState={this.state.numberOfPlayers} setPlayers={this.setNumberOfPlayers}/>
                <Player playersState={this.state.numberOfPlayers} addPlayerName={this.addPlayerInfo}/>
            </div>
        );
    }
}

