import React from 'react';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            playerId : 1
        }
    }

    handleClick() {
        let player = document.getElementById('playerName');
        this.props.addPlayerName(this.state.playerId, player.value);
    }

    render() {
        return ((this.props.playersState) ?
            <div>
                <input type="text" name="playerName" id="playerName"></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
            : null
        )
    }
}