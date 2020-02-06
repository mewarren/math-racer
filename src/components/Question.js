import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subject : this.props.subject,
            problem : null,
            answer : null,
        };
    }

    //Sets state with random math Q&A. 
    generateQuestion = () => {
        let getRandomInt = max => 
        Math.floor(Math.random() * Math.floor(max));
        
        const operator = (this.state.subject === 'add') ? " + " : " - "; 
        //Change difficulty with integers
        let problem = getRandomInt(9) + operator + getRandomInt(9);

        this.setState({
            problem : problem,
            answer : eval(problem)
        })      
    }

    componentDidMount = () => {
        this.generateQuestion(this.state.problem);
     }

    checkAnswer = () => {
        let answer = document.getElementById('answer');
        // this.props.updateAttempts(this.state.attempts-1);
        if(parseInt(answer.value) === this.state.answer) {
            this.setState({alertMessage : 'Correct!'});
            this.showAlert();
            if(!this.state.alertMessage){
                this.props.handleScore(this.state.attempts);
                this.props.totalQuestions();
                this.nextQuestion();
            }
        } else {
            this.setState({alertMessage : 'Incorrect!'});
            this.showAlert();
            this.setState(prevState => {
                return {attempts : prevState.attempts - 1}
            });
            answer.value = null;
        }   
    }

    render() {
        return(
            <div>
                <p>What is the answer to</p>
                <h4>{this.state.problem}</h4>
                <input type="text" name="answer" id="answer"></input>
                <button onClick={this.handleClick}>Check</button>
            </div>
        );
    }
}