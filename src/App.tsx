import React from "react";
import "./App.css";
import { useState } from "react";

const status = "Next player: X";

const RenderSquare = (i:number) => {
  const [value, setValue] = useState('');

  return (
  <button className="square" onClick={()=> console.log('click')}>
    {i}
    </button>
    )

};

const board = () => {
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {RenderSquare(0)}
        {RenderSquare(1)}
        {RenderSquare(2)}
      </div>
      <div className="board-row">
        {RenderSquare(4)}
        {RenderSquare(5)}
        {RenderSquare(6)}
      </div>
      <div className="board-row">
        {RenderSquare(6)}
        {RenderSquare(7)}
        {RenderSquare(8)}
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
