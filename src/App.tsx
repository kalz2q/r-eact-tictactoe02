import React, { useState, useEffect } from "react";
import "./App.css";
// rewriting 08 because of useState

type SquareState = "O" | "X" | "";

type SquareProps = {
  value: SquareState;
  onClick: () => void;
};

const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

type BoardState = {
  squares: [SquareState, SquareState, SquareState, SquareState, SquareState, SquareState, SquareState, SquareState, SquareState],
  xIsNext: boolean,
}



const Board = () => {
  useEffect(() => {
    document.title = "react-tictactoe08=>09";
  });

  // const [squares, setSquares] = useState<SquareState[]>(Array(9).fill(""));
  // const [xIsNext, setXIsNext] = useState<boolean>(true);

const [state, setState] = useState <BoardState>({
  squares: ["", "", "", "", "", "", "", "", ""],
  xIsNext: true,
}
)


  // const status = "Next player: " + (xIsNext ? "X" : "O");
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i: number) => {
    const newSquares: SquareState[] = squares.slice();
    if (calculateWinner(squares) || squares[i] !== "") {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    console.log(squares);
  };

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </>
      </div>
      <div className="board-row">
        <>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </>
      </div>
      <div className="board-row">
        <>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================

const calculateWinner = (squares: SquareState[]) => {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// ========================================

export default App;