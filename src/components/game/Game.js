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
        const { numberOfPlayers, players } = this.state;
        return ( 
            <div>
                <Players playersState={numberOfPlayers} setPlayers={this.setNumberOfPlayers}/>
                <Player playersState={numberOfPlayers} playerInfo={players} addPlayerName={this.addPlayerInfo}/>
            </div>
        );
    }
}