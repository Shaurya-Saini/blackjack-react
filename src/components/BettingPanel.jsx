"use client"

import { useState } from "react"

const BettingPanel = ({ money, currentBet, onPlaceBet, gameInProgress }) => {
  const [betAmount, setBetAmount] = useState(10)

  const handleBetChange = (e) => {
    const value = Number.parseInt(e.target.value) || 0
    setBetAmount(Math.min(value, money))
  }

  const handlePlaceBet = () => {
    if (betAmount > 0 && betAmount <= money) {
      onPlaceBet(betAmount)
    }
  }

  const quickBetAmounts = [5, 10, 25, 50, 100]

  return (
    <div className="betting-panel">
      <div className="money-display">
        <h3>Balance: ${money}</h3>
        {currentBet > 0 && <p>Current Bet: ${currentBet}</p>}
      </div>

      {!gameInProgress && (
        <div className="betting-controls">
          <div className="bet-input-group">
            <label htmlFor="bet-amount">Bet Amount:</label>
            <input
              id="bet-amount"
              type="number"
              value={betAmount}
              onChange={handleBetChange}
              min="1"
              max={money}
              className="bet-input"
            />
          </div>

          <div className="quick-bets">
            {quickBetAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setBetAmount(Math.min(amount, money))}
                className="quick-bet-btn"
                disabled={amount > money}
              >
                ${amount}
              </button>
            ))}
          </div>

          <button onClick={handlePlaceBet} className="place-bet-btn" disabled={betAmount <= 0 || betAmount > money}>
            Place Bet & Deal
          </button>
        </div>
      )}
    </div>
  )
}

export default BettingPanel
