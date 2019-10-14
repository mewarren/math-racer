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

    //add indivdual player objects to players object
    //DELETE THIS LINE WHEN WORKING
    addPlayerInfo = (id,name) => {
        console.log(id + ',' +name);
        let updatedPlayers = Object.assign(this.state.players, {playerId : id, playerName : name} );
        this.setState({
            players : updatedPlayers
        });
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

