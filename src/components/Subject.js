import React from 'react';

export default class Subject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subject : null
        };
    }

    setSubject = (button) => {
        this.setState({
            subject : button.currentTarget.value
        });
        this.props.setSubject(this.state.subject);
    }

    // handleClick = (button) => {
    // }

    //  Subject will most likely persist to allow user to 
    //  toggle between subjects while playing.
    render() {       
        return (
            <div className="selectSubject">
                {(!this.state.subject) ? <p>Select your subject</p> : null }
                <button value="add" onClick={this.setSubject}>Addition</button>
                <button value="sub" onClick={this.setSubject}>Subtraction</button>
                {/* <button onClick={this.handleClick}>Start</button> */}
            </div>
        )
    }
}