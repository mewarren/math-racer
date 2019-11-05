import React from 'react';

export default class StatusBar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { playerInfo, activePlayer } = this.props;
        return((this.props.gameStatus) ?
            <div>
                <h3>{playerInfo[activePlayer-1].name}</h3>
                <h3>{playerInfo[activePlayer-1].score}</h3>
            </div> 
            : null


        );
    }
}