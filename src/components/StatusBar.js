import React from 'react';

export default class StatusBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>Player Name</h3>
                <h3>Player Score:</h3>
            </div>

        );
    }
}