import React from "react";
import "./App.css";
import { useState } from "react";

const status = "Next player: X";

const renderSquare = (i: number) => {
  return <button className="square">{/* TODO */}</button>;
};

const board = () => {
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="game">
      <div className="game-board">
        {/* <Board /> */}
        {board()}
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
