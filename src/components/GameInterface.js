import React from 'react';
import Question from './Question';

export default class GameInterface extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.props.nextPlayer();
    }

    render() {
        return((this.props.gameStatus) ?
            <div>
                <Question />
                <button onClick={this.handleClick}>Enter</button>
            </div>
            : null
        );
    }
}