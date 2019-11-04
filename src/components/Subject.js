import React from 'react';

export default class Subject extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            subject : null,
            add : false,
            sub : false
        };
    }

    handleClick(button) {
        this.setState({
            subject : button.currentTarget.value
        }); 
    }

    render() {
        const { playersState, playerInfo } = this.props;
        
        return ((playersState > 0 && playersState === playerInfo.length) ?
            <div className="selectSubject">
                <button value="add" onClick={this.handleClick}>Addition</button>
                <button value="sub" onClick={this.handleClick}>Subtraction</button>
                <button>Start</button>
            </div>
            : null
        );
    }


}