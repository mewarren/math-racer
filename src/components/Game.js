import React from 'react';
import './css/game.css';
import Players from './Players';
import Player from './Player';
import Subject from './Subject';
import GameInterface from './GameInterface';


export default class Game extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            numberOfPlayers : 0,
            players : [],
            subject : null,
            activeGame: false,
            activePlayer: 0,

        };
    }

    newGame = () => {
        this.setState({
            numberOfPlayers : 0,
            players : [],
            subject : null,
            activeGame: false,
            activePlayer: 0
        });
    }

    setNumberOfPlayers = (number) => {
        this.setState({ 
            numberOfPlayers : parseInt(number) 
        });
    }

    //add indivdual player objects to players array 
    addPlayerInfo = (player) => {
        let updatedPlayers = [...this.state.players, player];
        this.setState({
            players : updatedPlayers
        });
    }

    setSubject = (subject) => {
        this.setState({
            subject : subject
        });
    }

    startGame = () => {
        this.setState({ 
            activeGame : true,
            activePlayer : 1 
        });
    }

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


    updateActivePlayer = () => {
        if(this.state.activePlayer < this.state.numberOfPlayers){
            this.setState(prevState => {
                return {activePlayer : prevState.activePlayer + 1}
            });
        } else { this.setState({ activePlayer : 1 });}
    }

    render() {
        const { numberOfPlayers, players, subject, activeGame, activePlayer } = this.state;
        const player = players[activePlayer-1];
        return ( 
            <div className="game">
                <header>
                    <h1>Math Racer</h1>
                    <input type="button" value="New Game" onClick={this.newGame}/>
                </header>
                <Players playersState={numberOfPlayers} setPlayers={this.setNumberOfPlayers}/>
                <Player playersState={numberOfPlayers} playerInfo={players} addPlayerName={this.addPlayerInfo}/>
                
                {(!this.state.activeGame) ? 
                    <div>
                        <Subject onClick={this.setSubject}/> 
                        <button onClick={this.startGame}>Start</button>
                    </div>
                    : null}

                <GameInterface gameStatus={activeGame} nextPlayer={this.updateActivePlayer} player={player} subject={subject} addScore={this.addScore}/>
            </div>
        );
    }
}