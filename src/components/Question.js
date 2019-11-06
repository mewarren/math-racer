import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.generateQuestion = this.generateQuestion.bind(this);

        this.state = {
            subject : this.props.subject,
            problem : null,
            answer : null
        };
    }

    generateQuestion = (subject) => {
        let getRandomInt = max => 
        Math.floor(Math.random() * Math.floor(max));

        let operator = (subject === 'add') ? " + " : " - "; 
        let question = getRandomInt(9) + operator + getRandomInt(9);
        console.log(question);
        this.setState({
            problem : question
        });
        
    }

    componentDidMount(){
        this.generateQuestion(this.state.problem);
     }

    render() {
        return(
            <div>
                 <p>questions go here</p>
            </div>
        );
    }
}