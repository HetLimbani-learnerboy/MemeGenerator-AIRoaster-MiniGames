import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Typinggame.css';

const TEXT_SAMPLES = [
  "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet. Learning to type quickly and accurately is a valuable skill in today's digital world. Practice regularly to improve your speed.",
  "Technology has revolutionized the way we live and work. From smartphones to artificial intelligence, innovations continue to shape our future. Understanding these changes is crucial for staying ahead in a fast-paced environment.",
  "The sun always shines brightest after the rain. This old saying reminds us that challenges are often followed by opportunities. Maintaining a positive outlook can help you navigate difficult times and emerge stronger than before.",
  "Exploring the world is a journey of discovery. Every new place offers unique cultures, histories, and perspectives. Traveling broadens the mind and enriches the soul, creating memories that last a lifetime. Adventure awaits.",
  "Creativity is the ability to bring something new into existence. It is not limited to the arts but can be applied in any field. Fostering a creative mindset involves curiosity, experimentation, and the courage to make mistakes."
];

function TypingGame() {
  const [textToType, setTextToType] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timer, setTimer] = useState(60);
  const [gameState, setGameState] = useState('waiting');
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const inputRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const navigate = useNavigate();

  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * TEXT_SAMPLES.length);
    setTextToType(TEXT_SAMPLES[randomIndex]);
    setUserInput('');
    setTimer(60);
    setGameState('waiting');
    setWpm(0);
    setAccuracy(0);
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    inputRef.current?.focus();
  };

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (gameState === 'running' && timer > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && gameState === 'running') {
      setGameState('finished');
      clearInterval(timerIntervalRef.current);
      calculateResults();
    }
    return () => clearInterval(timerIntervalRef.current);
  }, [gameState, timer]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (gameState === 'finished') return;

    if (gameState === 'waiting') {
      setGameState('running');
    }
    setUserInput(value);
  };

  const calculateResults = () => {
    const wordsTyped = userInput.trim().split(/\s+/).length;
    const timeElapsedInMinutes = (60 - timer) / 60;

    let correctChars = 0;
    const typedChars = userInput.length;

    textToType.split('').forEach((char, index) => {
      if (userInput[index] === char) {
        correctChars++;
      }
    });

    const calculatedWpm = timeElapsedInMinutes > 0 ? Math.round((correctChars / 5) / timeElapsedInMinutes) : 0;
    const calculatedAccuracy = typedChars > 0 ? Math.round((correctChars / typedChars) * 100) : 0;
    setWpm(calculatedWpm);
    setAccuracy(calculatedAccuracy);
  };


  const renderText = () => {
    return textToType.split('').map((char, index) => {
      let className = '';
      if (index < userInput.length) {
        className = userInput[index] === char ? 'correct' : 'incorrect';
      } else if (index === userInput.length) {
        className = 'cursor';
      }
      return <span key={index} className={className}>{char}</span>;
    });
  };

  return (
    <>

      <div className="typing-game-container">
        <div className="typing-game">
          <h1>Typing Speed Test</h1>
          <div className="stats">
            <div className="stat-item">
              Time
              <span>{timer}s</span>
            </div>
            <div className="stat-item">
              WPM
              <span>{wpm}</span>
            </div>
            <div className="stat-item">
              Accuracy
              <span>{accuracy}%</span>
            </div>
          </div>
          <div className="text-display-container">
            {renderText()}
          </div>
          <textarea
            ref={inputRef}
            className="input-area"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Start typing here..."
            disabled={gameState === 'finished'}
            rows="3"
          />
          <div className="controls">
            <button className="restart-btn" onClick={resetGame}>
              Restart Test
            </button>
            <button className='restart-btn' onClick={() => navigate('/getstart')}>
              Back to Menu
            </button>
          </div>
        </div>
        {gameState === 'finished' && (
          <div className="results-overlay">
            <div className="results-box">
              <h2>Test Complete!</h2>
              <div className="stats">
                <div className="stat-item">
                  WPM
                  <span>{wpm}</span>
                </div>
                <div className="stat-item">
                  Accuracy
                  <span>{accuracy}%</span>
                </div>
              </div>
              <div className="controls">
                <button className="restart-btn" onClick={resetGame}>
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TypingGame;
