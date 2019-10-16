import React from 'react';
import Players from '../players/Players';
import Player from '../player/Player';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfPlayers : 0,
            players : []
        };
    }

    setNumberOfPlayers = (number) => {
        this.setState({ 
            numberOfPlayers : parseInt(number) 
        });
    }

    //add indivdual player objects to players array 
    addPlayerInfo = (player) => {
        console.log(player);
        let updatedPlayers = [...this.state.players, player]
        this.setState({
            players : updatedPlayers
        });
    }
    
    render() {
        return ( 
            <div>
                <Players playersState={this.state.numberOfPlayers} setPlayers={this.setNumberOfPlayers}/>
                <Player playersState={this.state.numberOfPlayers} playerInfo={this.state.players} addPlayerName={this.addPlayerInfo}/>
            </div>
        );
    }
}