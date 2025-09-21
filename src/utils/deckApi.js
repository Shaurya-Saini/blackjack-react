const API_BASE = "https://deckofcardsapi.com/api/deck"

export const createNewDeck = async () => {
  const response = await fetch(`${API_BASE}/new/shuffle/?deck_count=1`)
  const data = await response.json()
  return data.deck_id
}

export const drawCards = async (deckId, count = 1) => {
  const response = await fetch(`${API_BASE}/${deckId}/draw/?count=${count}`)
  const data = await response.json()
  return data.cards
}

export const shuffleDeck = async (deckId) => {
  const response = await fetch(`${API_BASE}/${deckId}/shuffle/`)
  const data = await response.json()
  return data.success
}
