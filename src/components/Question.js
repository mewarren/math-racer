import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.generateQuestion = this.generateQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            subject : this.props.subject,
            problem : null,
            answer : null,
            attempts : 3
        };
    }

    generateQuestion() {
        let getRandomInt = max => 
            Math.floor(Math.random() * Math.floor(max));

        const operator = (this.state.subject === 'add') ? " + " : " - "; 
        let problem = getRandomInt(9) + operator + getRandomInt(9);

        this.setState({
            problem : problem,
            answer : eval(problem)
        })      
    }

    componentDidMount(){
        this.generateQuestion(this.state.problem);
     }

    checkAnswer(){
        let answer = document.getElementById('answer');
        // console.log("does " + answer.value + ' = ' + this.state.answer );
        
        if(parseInt(answer.value) === this.state.answer) {
            console.log("Correct!");
            this.props.handleScore(this.state.attempts);
            this.nextQuestion();
        } else {
            console.log("incorrect!");
            answer.value = null;
        }
        
        answer.value = null;
        this.setState(prevState => {
            return {attempts : prevState.attempts - 1}
        });
    }

    nextQuestion() {
        this.props.nextPlayer();
            this.generateQuestion(this.state.problem);
            this.setState({
                attempts : 3
            });   
    }

    handleClick() {
        if(this.state.attempts > 1) {
            this.checkAnswer(); 
        } else {
            this.nextQuestion();           
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