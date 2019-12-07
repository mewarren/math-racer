import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.generateQuestion = this.generateQuestion.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.showAlert = this.showAlert.bind(this);

        this.state = {
            subject : this.props.subject,
            problem : null,
            answer : null,
            attempts : 3,
            alert : false,
            alertMessage : null

        };
    }

    //Sets state with random math Q&A. 
    generateQuestion() {
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

    componentDidMount(){
        this.generateQuestion(this.state.problem);
     }

    checkAnswer() {
        let answer = document.getElementById('answer');
        
        if(parseInt(answer.value) === this.state.answer) {
            this.setState({alertMessage : 'Correct!'});
            this.showAlert();
            this.props.handleScore(this.state.attempts);
            this.nextQuestion();
        } else {
            this.setState({alertMessage : 'Incorrect!'});
            this.showAlert();
            this.setState(prevState => {
                return {attempts : prevState.attempts - 1}
            });
            answer.value = null;
        }   
    }

    //Correct message
    showAlert() {
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
    nextQuestion() {
        this.props.nextPlayer();
        document.getElementById('answer').value = null;
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