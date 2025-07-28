// TicTacToe.jsx
import React, { useState } from 'react';
//import './TicTacToe.css';

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
  const [mode, setMode] = useState('');
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [aiDifficulty, setAiDifficulty] = useState('easy');

  const winner = calculateWinner(board);
  const currentPlayer = xIsNext ? 'X' : 'O';

  const handleClick = (i) => {
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = currentPlayer;
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    if (mode === 'ai' && !winner && currentPlayer === 'X') {
      setTimeout(() => makeAIMove(newBoard), 500);
    }
  };

  const makeAIMove = (newBoard) => {
    let move;
    if (aiDifficulty === 'hard') {
      move = findBestMove(newBoard);
    } else {
      const emptyIndexes = newBoard.map((val, i) => val === null ? i : null).filter(i => i !== null);
      move = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    }
    if (move !== undefined) {
      newBoard[move] = 'O';
      setBoard(newBoard);
      setXIsNext(true);
    }
  };

  const findBestMove = (board) => {
    // Simple Minimax placeholder
    const emptyIndexes = board.map((val, i) => val === null ? i : null).filter(i => i !== null);
    return emptyIndexes[0]; // Placeholder: Replace with real Minimax
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const renderSquare = (i) => (
    <button className="square" onClick={() => handleClick(i)}>{board[i]}</button>
  );

  return (
    <div className="game-container">
      {!mode ? (
        <div className="mode-select">
          <h2>Select Game Mode</h2>
          <button onClick={() => handleModeSelect('friends')}>Play with Friend</button>
          <button onClick={() => handleModeSelect('ai')}>Play with AI</button>
        </div>
      ) : (
        <>
          {mode === 'ai' && (
            <div className="difficulty-select">
              <label>Select AI Difficulty: </label>
              <select value={aiDifficulty} onChange={(e) => setAiDifficulty(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          )}
          <div className="board">
            {[0, 1, 2].map(row => (
              <div key={row} className="board-row">
                {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
              </div>
            ))}
          </div>
          <div className="status">
            {winner ? `Winner: ${winner}` : `Next Player: ${currentPlayer}`}
          </div>
          <button onClick={() => handleModeSelect('')}>Back</button>
        </>
      )}
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
