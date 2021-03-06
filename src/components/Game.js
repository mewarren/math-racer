import React from 'react';
import './css/game.css';
import Players from './Players';
import Player from './Player';
import GameInterface from './GameInterface';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfPlayers : 0,
            players : [],
            activeGame: false,
            activePlayer: 0,
        };
    }

    //resets to default state
    newGame = () => {
        this.setState({
            numberOfPlayers : 0,
            players : [],
            activeGame: false,
            activePlayer: 0
        });
    }

    //sets number of players for game
    setNumberOfPlayers = (number) => {
        this.setState({ 
            numberOfPlayers : parseInt(number) 
        });
    }

    //adds indivdual player objects to players array 
    addPlayerInfo = (player) => {
        let updatedPlayers = [...this.state.players, player];
        this.setState({
            players : updatedPlayers
        });
    }
    
    //initiates the game
    startGame = () => {
        this.setState({ 
                activeGame : true,
                activePlayer : 1 
            });
    }

    //adds to player's previous score
    addScore = (id, score) => {
        const { players, activePlayer } = this.state;
        const currentScore = players[activePlayer-1].score;
        
        this.setState(prevState => ({
            players : prevState.players
                .map( el => el.id === id ? {
                    ...el, score: currentScore + score
                } : el )
        }))
    }

    //cycles through players
    updateActivePlayer = () => {
        if(this.state.activePlayer < this.state.numberOfPlayers){
            this.setState(prevState => {
                return {activePlayer : prevState.activePlayer + 1}
            });
        } else { this.setState({ activePlayer : 1 });}
    }

    render() {
        const { numberOfPlayers, players, activeGame, activePlayer } = this.state;
        const player = players[activePlayer-1];
        return ( 
            <div className="game">
                <header>
                    <h1>Math Racer</h1>
                    <input 
                        type="button" 
                        value="New Game" 
                        onClick={this.newGame}
                    />
                </header>
                
                <Players 
                    numberOfPlayers={numberOfPlayers} 
                    setPlayers={this.setNumberOfPlayers}
                    />

                <Player 
                    numberOfPlayers={numberOfPlayers} 
                    players={players} 
                    addPlayerName={this.addPlayerInfo}
                    />

                <GameInterface 
                    start ={this.startGame} 
                    gameStatus={activeGame} 
                    nextPlayer={this.updateActivePlayer} 
                    player={player} 
                    addScore={this.addScore}
                    numberOfPlayers={numberOfPlayers} 
                    players={players} 
                />
            </div>
        );
    }
}