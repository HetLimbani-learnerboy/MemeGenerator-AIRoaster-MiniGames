import React, { useState, useEffect } from 'react';
import './RPSstyle.css'; 
import { useNavigate } from 'react-router-dom';


const choices = [
  { name: 'rock', emoji: '✊' },
  { name: 'paper', emoji: '✋' },
  { name: 'scissors', emoji: '✌️' },
];

// --- Main App Component ---
function RPSgame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState(null);
  const [userMoveHistory, setUserMoveHistory] = useState([]);
  const [isRoundOver, setIsRoundOver] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    if (userChoice) {
      const newHistory = [...userMoveHistory, userChoice.name];
      setUserMoveHistory(newHistory);

      const computerSelection = generateComputerChoice();
      setComputerChoice(computerSelection);
      determineWinner(userChoice, computerSelection);
      setIsRoundOver(true);
    }
  }, [userChoice]);

  const generateComputerChoice = () => {
    const useSmartLogic = Math.random() > 0.25;

    if (useSmartLogic && userMoveHistory.length > 0) {
      const lastUserMove = userMoveHistory[userMoveHistory.length - 1];
      
      const whatBeatsUserLastMove = choices.find(
        (c) =>
          (c.name === 'rock' && lastUserMove === 'scissors') ||
          (c.name === 'paper' && lastUserMove === 'rock') ||
          (c.name === 'scissors' && lastUserMove === 'paper')
      );
      
      const counterToAnticipatedMove = choices.find(
        (c) =>
          (c.name === 'rock' && whatBeatsUserLastMove.name === 'scissors') ||
          (c.name === 'paper' && whatBeatsUserLastMove.name === 'rock') ||
          (c.name === 'scissors' && whatBeatsUserLastMove.name === 'paper')
      );

      return counterToAnticipatedMove;
    } else {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  };

  const determineWinner = (user, computer) => {
    if (user.name === computer.name) {
      setResult("It's a Draw!");
    } else if (
      (user.name === 'rock' && computer.name === 'scissors') ||
      (user.name === 'paper' && computer.name === 'rock') ||
      (user.name === 'scissors' && computer.name === 'paper')
    ) {
      setResult('You Win!');
      setUserScore((prevScore) => prevScore + 1);
    } else {
      setResult('You Lose!');
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  const handleUserChoice = (choice) => {
    if (!isRoundOver) {
      setUserChoice(choice);
    }
  };

  const handleRematch = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setIsRoundOver(false);
  };
  
  const handleGoBack = () => {
    setGameStarted(false);
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setIsRoundOver(false);
    setUserScore(0);
    setComputerScore(0);
    setUserMoveHistory([]);
  };

  const getResultColor = () => {
    if (result === 'You Win!') return 'result-win';
    if (result === 'You Lose!') return 'result-lose';
    return 'result-draw';
  };

  const renderGame = () => (
    <div className="app-container">
      <div className="RPSgame-container">
        <button className="btn-back" onClick={handleGoBack}>
          &larr; Back
        </button>

        <h1 className="RPSgame-title">Rock Paper Scissors</h1>

        <div className="scoreboard">
          <div className="score">
            <p>Player</p>
            <span>{userScore}</span>
          </div>
          <div className="score">
            <p>Computer</p>
            <span>{computerScore}</span>
          </div>
        </div>

        {isRoundOver ? (
          <div className="result-area">
            <div className="choice-display">
              <span className="choice-label">You chose</span>
              <p className="choice-emoji">{userChoice?.emoji}</p>
            </div>
            <div className="result-message">
              <h2 className={getResultColor()}>{result}</h2>
              <button className="btn-rematch" onClick={handleRematch}>
                Rematch
              </button>
            </div>
            <div className="choice-display">
              <span className="choice-label">Computer chose</span>
              <p className="choice-emoji">{computerChoice?.emoji}</p>
            </div>
          </div>
        ) : (
          <div className="choice-area">
            <p>Choose your weapon:</p>
            <div className="choices">
              {choices.map((choice) => (
                <button
                  key={choice.name}
                  className="btn-choice"
                  onClick={() => handleUserChoice(choice)}
                  aria-label={choice.name}
                >
                  {choice.emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderStartScreen = () => (
     <div className="app-container">
        <div className="start-screen">
          <h1>Rock Paper Scissors</h1>
          <p>Can you beat the advanced AI?</p>
          <button className="btn-start" onClick={() => setGameStarted(true)}>
            Start Game
          </button>
          <button onClick={()=>Navigate('/getstart')} className="btn-start" >
            Back to Menu
          </button>
        </div>
      </div>
  );

  return (
    <>

      {isGameStarted ? renderGame() : renderStartScreen()}
    </>
  );
}

export default RPSgame;
