import React from 'react';
import Question from './Question';
import StatusBar from './StatusBar';
import Subject from './Subject';
import PlayerReady from './PlayerReady';

export default class GameInterface extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            playerReady : false,
            attempts : 3,
            totalQuestions : 0,
            alert : false,
            alertMessage : null,
        };
    }

    playerReady = () => {
        this.setState({
            playerReady : true,
        });
    }

    handleScore = (score) => {
        const { player, addScore } = this.props;
        addScore(player.id, score);    
    }

    updateAttempts = (attempts) => {
        this.setState({
            attempts : attempts
        });
    }

    updateTotalQuestions = () => {
        //end game goes here
        this.setState(prevState => {
            return {totalQuestions : prevState.totalQuestions + 1}
        });
    }
    
    correctAnswer = () => {
        console.log('Correct!');
    }

    incorrectAnswer = () => {
        console.log('Incorrect!');
    }
    
    renderSubject = () => {
        const { players, numberOfPlayers, start, gameStatus} = this.props;
        console.log('renderSubject called!');
        if(numberOfPlayers > 0 && numberOfPlayers === players.length) {
            return (         
                <Subject startGame={start} gameStatus={gameStatus}/>   
            );
        } else { return null};
    }

    renderPlayerReady = () => {
        if(!this.state.playerReady) {
            return (
                <PlayerReady 
                    playerReady={this.playerReady}
                    player={this.props.player}
                />
            );
        } else { return null; }
    }

    render() {
        const { player } = this.props;
        const { attempts, playerReady } = this.state;
        return(
            <div className="gameInterface">
                <StatusBar player={player} playerReady={playerReady} attempts={attempts}/>
                {this.renderPlayerReady()}
                {this.renderSubject()}

                { playerReady ? <Question subject={this.props.subject} /> : null }
            </div> 
        );
    }
}