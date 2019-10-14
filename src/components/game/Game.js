import React from 'react';
import Players from '../players/Players';
import Player from '../player/Player';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfPlayers : 0
        };
    }

    setNumberOfPlayers = (number) => {
        console.log('value of number is ' + number)
        this.setState({ 
            numberOfPlayers : parseInt(number) 
        });
    }
    
    render() {
        return ( 
            <div>
                <Players playersState={this.state.numberOfPlayers} setPlayers={this.setNumberOfPlayers}/>
                <Player playersState={this.state.numberOfPlayers}/>
            </div>
        );
    }
}

