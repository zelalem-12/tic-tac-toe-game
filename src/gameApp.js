import Board from "./components/board";

const GameApp = () => {
  const status = "Next player: X";
  return (
    <div className="game">
      <div className="game-board">
        <Board status={status} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <div>{/* TODO */}</div>
      </div>
    </div>
  );
};
export default GameApp;
