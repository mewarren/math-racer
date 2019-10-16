import React from 'react';
import './players.css';

export default class Players extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(button) {
        this.props.setPlayers(button.currentTarget.value);
    }
    
    render() {       
        return ((!this.props.playersState) ?
            <div>
                <p>Select the number of players</p>
                <div className="selectPlayers">
                    <button value="1" onClick={this.handleClick}>1</button>
                    <button value="2" onClick={this.handleClick}>2</button>
                    <button value="3" onClick={this.handleClick}>3</button>
                    <button value="4" onClick={this.handleClick}>4</button>
                </div>
            </div>
            : null
         );
        
    }
}