import React from 'react';
import Question from './Question';

export default class GameInterface extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

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

    render() {
        const { gameStatus, player, nextPlayer } = this.props;
        return((gameStatus !== false) ?
            <div>
                {(this.state.playerReady===false) ?
                <div>
                    <p> {player.name} are you ready</p>
                    <button onClick={this.handleClick}>Let's Go!</button> 
                </div> :
                <Question subject={this.props.subject} nextPlayer={nextPlayer}/>}
           
            </div> : null
        );
    }
}