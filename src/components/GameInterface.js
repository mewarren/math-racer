import React from 'react';
import Question from './Question';

export default class GameInterface extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.setName = this.setName.bind(this);

        this.state = { 
            playerReady : false,
            playerName : null
        };

    }

    setName(){
        let { playerInfo, activePlayer } = this.props;
        let player = playerInfo[activePlayer];
        console.log(playerInfo);
        this.setState({
            playerName : 'player name'
        });
    }

    componentWillMount(){
        console.log('GI is mounting');

        this.setName();
    }
    // handleClick() {
    //     this.props.nextPlayer();
    // }

    render() {
        const { gameStatus, activePlayer } = this.props;
        return((activePlayer > 0) ?
            // <div>
            //     <Question subject={this.props.subject}/>
            //     {/* <button onClick={this.handleClick}>Enter</button> */}
            // </div>
            // : 
            <div>
                <p> {this.state.playerName} are you ready</p>
                <button>Let's Go!</button>
            </div>: null
        );
    }
}