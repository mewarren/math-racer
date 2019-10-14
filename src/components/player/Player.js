import React from 'react';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let player = document.getElementById('playerName');
        this.props.addPlayerName(player.value);
    }

    render() {
        return((this.props.playersState) ?
            <div>
                <input type="text" name="playerName" id="playerName"></input>
                <button onClick={this.handleClick}>Next</button>
            </div>
            : null
        )
    }
}