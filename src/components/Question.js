import React from 'react';
import AlertMessage from './AlertMessage';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subject : this.props.subject,
            problem : null,
            answer : null,
            alert : false,
            alertMessage : null,
            attempts : 3
        };
    }

    //Sets state with randomly generated math Q&A. 
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
            this.correct();
        } else {
            this.incorrect();
        }   
    }

    correct = () => {
        this.setState({alertMessage : 'Correct!'});
            this.showAlert();
            if(!this.state.alertMessage){
                this.props.handleScore(this.state.attempts);
                this.props.totalQuestions();
                this.nextQuestion();
            }
    }

    incorrect = () => {
        this.setState({alertMessage : 'Incorrect!'});
            this.showAlert();
            this.setState(prevState => {
                return {attempts : prevState.attempts - 1}
            });
            this.props.updateAttempts(this.state.attempts-1);
            document.getElementById('answer').value = null;
    }

    //Correct message
    showAlert = () => {
        this.setState({
            alert : true,
        });
        
        setTimeout(
            function() {
                this.setState({
                    alert : false
                });
            }.bind(this), 1500
            );
        }
        
    //resets question
    nextQuestion = () => {
        this.props.nextPlayer();
        document.getElementById('answer').value = null;
        this.generateQuestion(this.state.problem);
        this.setState({
            attempts : 3
        });  
        this.props.updateAttempts(3); 
    }

    handleClick = () => {
        if(this.state.attempts > 1) {
            this.checkAnswer(); 
        } else {
            this.nextQuestion();           
        }  
    }

    handleRender = () => {
        if(this.state.alert) {
            return <AlertMessage message={this.state.alertMessage} />
        } else {
            return (
                <div>
                    <p>What is the answer to</p>
                    <h4>{this.state.problem}</h4>
                    <input type="text" name="answer" id="answer"></input>
                    <button onClick={this.handleClick}>Check</button>
                </div>
            )
        }
    }
    render() {
        return(
            <div>
                {this.handleRender()}
            </div>
        );
    }
}