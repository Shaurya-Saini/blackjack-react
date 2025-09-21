const GameMessage = ({ message, type }) => {
  if (!message) return null

  return <div className={`game-message ${type}`}>{message}</div>
}

export default GameMessage
