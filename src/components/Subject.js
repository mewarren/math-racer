import React from 'react';

export default class Subject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subject : null,
            showStart : false
        };
    }

    setSubject = (button) => {
        let subject = button.currentTarget.value;
        this.setState({
            subject : subject,
            showStart : true
        });
    }

    startGame = () => {
        this.props.startGame();
        this.setState({
            showStart: false
        });           
    }

    showStart = () => {
        if(!this.props.gameStatus && this.state.showStart) {
            return (<button onClick={this.startGame}>Start</button>);
        } else { 
            return
        }
    }

    render() {       
        return (
            <div className="selectSubject">
                { (!this.state.subject) ? <p>Select your subject</p> : null }
                <div className="subjects">
                    <button value="add" onClick={this.setSubject}>Addition</button>
                    <button value="sub" onClick={this.setSubject}>Subtraction</button>
                </div>
                { this.showStart() }
            </div>
        )
    }
}