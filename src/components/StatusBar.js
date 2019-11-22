import React from 'react';

export default class StatusBar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { player } = this.props;
        return((this.props.player) ?
            <div>
                <h3>Player: {player.name}</h3>
                <h3>Score:{player.score}</h3>
                <h3>Remaining Attempts:</h3>
                <h3>Round:</h3>
            </div> 
            : null


        );
    }
}