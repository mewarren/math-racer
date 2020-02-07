import React from 'react';
import Question from './Question';
import StatusBar from './StatusBar';
import Subject from './Subject';

export default class GameInterface extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            playerReady : false,
            attempts : 3,
            totalQuestions : 0,
            alert : false,
            alertMessage : null,
            startMessage : 'Please choose a subject'
        };
    }

    playerReady = () => {
        this.setState({
            playerReady : true,
        });
    }

    handleScore = (score) => {
        const { player, addScore } = this.props;
        addScore(player.id, score);    
    }

    updateAttempts = (attempts) => {
        this.setState({
            attempts : attempts
        });
    }

    updateTotalQuestions = () => {
        //end game goes here
        this.setState(prevState => {
            return {totalQuestions : prevState.totalQuestions + 1}
        });
    }
    
    correctAnswer = () => {
        console.log('Correct!');
    }

    incorrectAnswer = () => {
        console.log('Incorrect!');
    }

    //Pasted in from Question
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
        this.nextPlayer();
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

    ////////////////////////////////////////////////////////////////
    
    renderSubject = () => {
        const { players, numberOfPlayers, start, gameStatus} = this.props;
        console.log('renderSubject called!');
        if(numberOfPlayers > 0 && numberOfPlayers === players.length) {
            return (         
                <Subject startGame={start} gameStatus={gameStatus}/>   
            );
        } else { return null};
    }

    render() {
        const { player } = this.props;
        const { attempts, playerReady } = this.state;
        return(
            <div className="gameInterface">
                <StatusBar player={player} playerReady={playerReady} attempts={attempts}/>

                {this.renderSubject()}


                {/* {(playerReady===false) ?
                    <div>
                        <p> {player.name} are you ready</p>
                        <button onClick={this.playerReady}>Let's Go!</button> 
                    </div> 
                    :
                    <div>
                        {(this.state.alert) ? <h2>{this.state.alertMessage}</h2> : 
                        <Question subject={this.props.subject} />}
                    </div>
                } */}
           
            </div> 
        );
    }
}