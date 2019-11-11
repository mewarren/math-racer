import React from 'react';
// import Question from './Question';

export default class GameInterface extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = { 
            playerReady : false,
        };
    }

    handleClick() {
        this.setState({
            playerReady : true
        });
        // this.props.nextPlayer();
    }

    render() {
        const { gameStatus, player } = this.props;
        return((gameStatus !== false) ?
            // <div>
            //     <Question subject={this.props.subject}/>
            //     {/* <button onClick={this.handleClick}>Enter</button> */}
            // </div>
            // : 
            <div>
                <p> {player.name} are you ready</p>
                
                {(this.state.playerReady===false) ? 
                <button onClick={this.handleClick}>Let's Go!</button> 
                : null}
            </div>: null
        );
    }
}