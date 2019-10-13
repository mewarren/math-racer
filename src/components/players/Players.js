import React from 'react';
import './players.css';

export default class Players extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.setPlayers(3);
    }
    

    render() {
        return(
            <div>
                <p>Select the number of players</p>
                <div className="selectPlayers">
                    <input type="radio" id="onePlayers" name="selectPlayers" value="one">
                    </input>
                    <label for="onePlayers">1</label>
                    
                    <input type="radio" id="twoPlayers" name="selectPlayers" value="two">
                    </input>
                    <label for="twoPlayers">2</label>
                    
                    <input type="radio" id="threePlayers" name="selectPlayers" value="three">
                    </input>
                    <label for="threePlayers">3</label>
                    
                    <input type="radio" id="fourPlayers" name="selectPlayers" value="four">
                    </input>
                    <label for="fourPlayers">4</label>
                </div>
                <button onClick={this.handleClick}>Next</button>

            </div>
        );
    }
}
