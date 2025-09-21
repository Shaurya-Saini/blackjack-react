import Card from "./Card"
import { calculateHandValue } from "../utils/gameLogic"

const Hand = ({ cards, title, hideFirstCard = false, showValue = true }) => {
  const visibleCards = hideFirstCard ? cards.slice(1) : cards
  const handValue = hideFirstCard
    ? cards.length > 1
      ? calculateHandValue(visibleCards)
      : "?"
    : calculateHandValue(cards)

  return (
    <div className="hand">
      <div className="hand-title">
        {title} {showValue && `(${handValue})`}
      </div>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={`${card.suit}-${card.value}-${index}`} card={card} hidden={hideFirstCard && index === 0} />
        ))}
      </div>
    </div>
  )
}

export default Hand
