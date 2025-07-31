import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicTacToe.css';

const initialBoard = Array(9).fill(null);
const player = 'X';
const ai = 'O';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isBoardFull(squares) {
  return squares.every(square => square !== null);
}

function minimax(newBoard, isMaximizing) {
  const winner = calculateWinner(newBoard);
  if (winner === ai) return { score: 10 };
  if (winner === player) return { score: -10 };
  if (isBoardFull(newBoard)) return { score: 0 };

  let moves = [];
  for (let i = 0; i < newBoard.length; i++) {
    if (newBoard[i] === null) {
      let move = {};
      move.index = i;
      newBoard[i] = isMaximizing ? ai : player;

      if (isMaximizing) {
        let result = minimax(newBoard, false);
        move.score = result.score;
      } else {
        let result = minimax(newBoard, true);
        move.score = result.score;
      }
      newBoard[i] = null; 
      moves.push(move);
    }
  }

  let bestMove;
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}


const TicTacToe = () => {
  const [mode, setMode] = useState('');
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [aiDifficulty, setAiDifficulty] = useState('hard');
  const navigate = useNavigate();

  const winner = calculateWinner(board);
  const isDraw = isBoardFull(board) && !winner;
  const currentPlayer = xIsNext ? 'X' : 'O';

  useEffect(() => {
    if (mode === 'ai' && !xIsNext && !winner && !isDraw) {
      const timer = setTimeout(() => {
        makeAIMove();
      }, 500);
      return () => clearTimeout(timer); 
    }
  }, [xIsNext, board, mode, winner, isDraw]);

  const handleClick = (i) => {
    if (winner || board[i]) return;

    const newBoard = [...board];
    newBoard[i] = currentPlayer;
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const makeAIMove = () => {
    let move;
    const boardCopy = [...board];

    if (aiDifficulty === 'hard') {
      const bestMove = minimax(boardCopy, true);
      move = bestMove.index;
    } else {
      const emptyIndexes = board.map((val, index) => val === null ? index : null).filter(val => val !== null);
      move = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    }

    if (move !== undefined) {
      boardCopy[move] = ai;
      setBoard(boardCopy);
      setXIsNext(true); 
    }
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    setBoard(initialBoard);
    setXIsNext(true);
  };
  
  const handleRematch = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const renderSquare = (i) => (
    <button className="square" onClick={() => handleClick(i)}>{board[i]}</button>
  );

  const getStatusMessage = () => {
    if (winner) return `Winner: ${winner} 🎉`;
    if (isDraw) return "It's a Draw! 🤝";
    return `Next Player: ${currentPlayer}`;
  };

  return (
    <div className="game-container">
      {!mode ? (
        <div className="mode-select">
          <h2>Select Game Mode</h2>
          <button onClick={() => handleModeSelect('friends')}>Play with Friend</button>
          <button onClick={() => handleModeSelect('ai')}>Play with AI</button>
          <button onClick={()=>navigate('/getstart')}>Back to Menu</button>
        </div>
      ) : (
        <>
          {mode === 'ai' && !winner && !isDraw && (
            <div className="difficulty-select">
              <label>AI Difficulty: </label>
              <select 
                value={aiDifficulty} 
                onChange={(e) => setAiDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          )}<div className="game-layout">
            <h2>Tic Tac Toe</h2>
          <div className="status">
            {getStatusMessage()}
          </div>
          
          <div className="board">
            {[0, 1, 2].map(row => (
              <div key={row} className="board-row">
                {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
              </div>
            ))}
          </div>
          <div className="controls">
            {(winner || isDraw) && (
              <button onClick={handleRematch}>Rematch</button>
            )}
            <button onClick={() => handleModeSelect('')}>Back to Menu</button>
          </div></div>
        </>
      )}
    </div>
  );
};

export default TicTacToe;