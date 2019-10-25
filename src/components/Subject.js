import React from 'react';

export default class Subject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subject : null
        };
    }

    render() {
        const { playersState, playerInfo } = this.props;
        return ((playersState >0 && playersState === playerInfo.length) ?
            <div className="selectSubject">
                <p>Addition</p>
                <p>Subtraction</p>
                <button>Start</button>
            </div>
            : null
        );
    }


}