import React from 'react';
import './css/statusBar.css';

export default class StatusBar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { player, attempts } = this.props;
        return((this.props.player) && (this.props.playerReady) ?
            <div className="statusBar">
                <h3>Player: {player.name}</h3>
                <h3>Score:{player.score}</h3>
                <h3>Remaining Attempts:{attempts}</h3>
                {/* <h3>Round:</h3> */}
            </div> 
            : null


        );
    }
}