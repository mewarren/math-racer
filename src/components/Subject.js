import React from 'react';

export default class Subject extends React.Component {
    
    handleClick = (button) => {
        this.props.setSubject(button.currentTarget.value);
    }

    render() {       
        return (
            <div className="selectSubject">
                <p>Select your subject</p>
                <button value="add" onClick={this.handleClick}>Addition</button>
                <button value="sub" onClick={this.handleClick}>Subtraction</button>
            </div>
        )
    }
}