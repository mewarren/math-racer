import React from 'react';
import Question from './Question';
import StatusBar from './StatusBar';

export default class GameInterface extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleScore = this.handleScore.bind(this);
        this.updateAttempts = this.updateAttempts.bind(this);

        this.state = { 
            playerReady : false,
            attempts : 3
        };
    }

    handleClick() {
        this.setState({
            playerReady : true,
        });
        // this.props.nextPlayer();
    }

    handleScore(score) {
        const { player, addScore } = this.props;
        addScore(player.id, score);
       
    }

    updateAttempts(attempts) {
        this.setState({
            attempts : attempts
        });
    }

    render() {
        const { gameStatus, player, nextPlayer } = this.props;
        const { attempts } = this.state;
        return((gameStatus !== false) ?
            <div>
                <StatusBar player={player} attempts={attempts}/>

                {(this.state.playerReady===false) ?
                    <div>
                        <p> {player.name} are you ready</p>
                        <button onClick={this.handleClick}>Let's Go!</button> 
                    </div> :
                    <Question 
                        subject={this.props.subject} 
                        nextPlayer={nextPlayer} 
                        handleScore={this.handleScore} 
                        updateAttempts={this.updateAttempts}
                    />
                }
           
            </div> : null
        );
    }
}