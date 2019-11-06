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
        let problem = getRandomInt(9) + operator + getRandomInt(9);

        this.setState({
            problem : problem,
            answer : eval(problem)
        })      
    }

    componentDidMount(){
        this.generateQuestion(this.state.problem);
     }

    render() {
        return(
            <div>
                 <p>What is the answer to</p>
                 <h4>{this.state.problem}</h4>
            </div>
        );
    }
}