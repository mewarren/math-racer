import React from 'react';

export default class Subject extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleStart = this.handleStart.bind(this);

        this.state = {
            subject : null
        };
    }

    handleClick(button) {
        this.setState({
            subject : button.currentTarget.value
        }); 
    }

    handleStart(button){
        console.log('start game with ' + this.state.subject);
        this.props.startGame(this.state.subject);
    }

    render() {
        const { playersState, playerInfo, subject } = this.props;
        
        return ((subject===null && playersState > 0 && playersState === playerInfo.length) ?
            <div className="selectSubject">
                <button value="add" onClick={this.handleClick}>Addition</button>
                <button value="sub" onClick={this.handleClick}>Subtraction</button>
                <button onClick={this.handleStart}>Start</button>
            </div>
            : null
        );
    }
}