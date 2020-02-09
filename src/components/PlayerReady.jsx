import React from 'react';

export default class PlayerReady extends React.Component{

    handleClick = () => {
        this.props.playerReady();
    }

    render() {
        const { player } = this.props;
        return(
            (!player) ? null :
                <div>
                    <p> {player.name} are you ready</p>
                    <button onClick={this.handleClick}>Let's Go!</button> 
                </div> 
        );
    }
}