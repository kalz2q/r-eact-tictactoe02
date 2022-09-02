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
  squares: [
    SquareState,
    SquareState,
    SquareState,
    SquareState,
    SquareState,
    SquareState,
    SquareState,
    SquareState,
    SquareState
  ];
  xIsNext: boolean;
};

const Board = () => {
  useEffect(() => {
    document.title = "react-tictactoe08=>09";
  });

  const [state, setState] = useState<BoardState>({
    squares: ["", "", "", "", "", "", "", "", ""],
    xIsNext: true,
  });

  const winner = calculateWinner(state.squares);
  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (state.xIsNext ? "X" : "O");
  }

  const handleClick = (i: number) => {
    const newSquares: [
      SquareState,
      SquareState,
      SquareState,
      SquareState,
      SquareState,
      SquareState,
      SquareState,
      SquareState,
      SquareState
    ] = ["", "", "", "", "", "", "", "", ""];

    state.squares.forEach((value, j) => {
      newSquares[j] = value;
    });

    if (calculateWinner(state.squares) || state.squares[i] !== "") {
      console.log(state.squares);
      return;
    }
    newSquares[i] = state.xIsNext ? "X" : "O";
    setState({ squares: newSquares, xIsNext: !state.xIsNext });
  };

  const renderSquare = (i: number) => {
    return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
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
