import React from 'react';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            playerId : 0
        }
    }

    // componentWillMount(){
    //     this.setState({
    //         playerId : this.props.playersState
    //     });
    // }
//still working on this logic--DELETE WHEN GAME COMPONENT IS WORK PROPERLY
    handleClick() {
        let player = {
            id : this.state.playerId,
            name : document.getElementById('playerName').value
        };
        this.props.addPlayerName(player);
        this.setState({
            playerId : this.state.playerId - 1
        });
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