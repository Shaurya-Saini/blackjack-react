"use client"

const GameControls = ({ onHit, onStand, onNewGame, gameState, canHit }) => {
  return (
    <div className="game-controls">
      {gameState === "playing" && (
        <>
          <button onClick={onHit} className="control-btn hit-btn" disabled={!canHit}>
            Hit
          </button>
          <button onClick={onStand} className="control-btn stand-btn">
            Stand
          </button>
        </>
      )}

      {gameState === "gameOver" && (
        <button onClick={onNewGame} className="control-btn new-game-btn">
          New Game
        </button>
      )}
    </div>
  )
}

export default GameControls
