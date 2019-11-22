import React from 'react';
import Question from './Question';
import StatusBar from './StatusBar';

export default class GameInterface extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleScore = this.handleScore.bind(this);

        this.state = { 
            playerReady : false,
        };
    }

    handleClick() {
        this.setState({
            playerReady : true
        });
        // this.props.nextPlayer();
    }

    handleScore(score) {
        const { player, addScore } = this.props;
        addScore(player.id, score);
    }

    render() {
        const { gameStatus, player, nextPlayer, addScore } = this.props;
        return((gameStatus !== false) ?
            <div>
                <StatusBar player={player} />

                {(this.state.playerReady===false) ?
                <div>
                    <p> {player.name} are you ready</p>
                    <button onClick={this.handleClick}>Let's Go!</button> 
                </div> :
                <Question subject={this.props.subject} nextPlayer={nextPlayer} handleScore={this.handleScore}/>}
           
            </div> : null
        );
    }
}