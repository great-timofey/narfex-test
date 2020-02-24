export const initialState = {
  market: '',
  asks: [],
  bids: [],
  totalAsks: 0,
  totalBids: 0,
  bestPrice: 0,
}

function getMarketData(asks, bids) {
  const asksData = asks.reduce(
    (acc, ask) => {
      const { amount, price } = ask
      const [bestPrice, totalAmount] = acc
      const newPrice = bestPrice > price ? bestPrice : price
      return [newPrice, totalAmount + amount]
    },
    [0, 0],
  )

  const bidsData = bids.reduce(
    (acc, ask) => {
      const { amount, price } = ask
      const [bestPrice, totalAmount] = acc
      const newPrice = bestPrice < price ? bestPrice : price
      return [newPrice, totalAmount + amount]
    },
    [bids[0].price, 0],
  )

  return { asksData, bidsData }
}

export function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'order_book': {
      const { asks: rawAsks, bids: rawBids } = payload
      const { asksData, bidsData } = getMarketData(rawAsks, rawBids)

      const bestPriceInitial = ((asksData[0] + bidsData[0]) / 2).toFixed(2)

      return {
        asks: rawAsks,
        bids: rawBids,
        totalAsks: asksData[1],
        totalBids: bidsData[1],
        bestPrice: bestPriceInitial,
      }
    }
    case 'new_orders': {
      const newAsks = payload.filter(newAskCandidate => newAskCandidate.action === 'sell')
      const newBids = payload.filter(newBidCandidate => newBidCandidate.action === 'buy')

      const { asksData, bidsData } = getMarketData(newAsks, newBids)

      const bestPrice = ((asksData[0] + bidsData[0]) / 2).toFixed(2)

      return {
        ...state,
        asks: newAsks,
        bids: newBids,
        totalAsks: asksData[1],
        totalBids: bidsData[1],
        bestPrice,
      }
    }

    default:
      return state
  }
}
