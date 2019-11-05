import React from 'react';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let name = document.getElementById('playerName');
        let player = {
            id : this.props.playerInfo.length + 1,
            name : name.value,
            score : 0
        };
        name.value = '';
        this.props.addPlayerName(player);           
    }

    render() {
        const { playerInfo, playersState } = this.props;
        return ((playerInfo.length < playersState) ?
            <div>
                <p>Please name for Player {playerInfo.length + 1}.</p>
                <input type="text" name="playerName" id="playerName"></input>
                <button onClick={this.handleClick}>Next</button>
            </div> 
            : null
        );
    }
}