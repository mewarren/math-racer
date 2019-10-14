import React from 'react';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return((this.props.playersState) ?
            <div>
                <h2>player name form</h2>
            </div>
            : null
        )
    }
}