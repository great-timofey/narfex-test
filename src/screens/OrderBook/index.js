import React, { memo, useEffect, useReducer } from 'react'
import { View, Text } from 'react-native'

const initialState = {
  market: '',
  asks: [],
  bids: [],
}

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'order_book':
      return payload
    case 'cancel_orders':
      return {
        ...state,
        asks: state.asks.filter(ask => !payload.includes(ask.id)),
        bids: state.bids.filter(bid => !payload.includes(bid.id)),
      }
    case 'new_orders':
      const newAsks = payload.filter(newAskCandidate => newAskCandidate.action === 'sell')
      const newBids = payload.filter(newBidCandidate => newBidCandidate.action === 'buy')

      return {
        ...state,
        asks: state.asks.concat(newAsks),
        bids: state.bids.concat(newBids),
      }

    default:
      return state
  }
}

export const OrderBook = memo(function({ route }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const { params } = route
    let socket
    if (params && params.marketName) {
      try {
        //  eslint-disable-next-line
        socket = new WebSocket('wss://ex.bitcoinbot.pro/')

        socket.onmessage = data => {
          try {
            const parsed = JSON.parse(data.data)
            const { type, body } = parsed

            dispatch({ type, payload: body })
          } catch (er) {
            console.log('parsing error')
          }
        }

        socket.onopen = () => {
          console.log('open')
          socket.send(
            JSON.stringify({ action: 'subscribe', params: { channel: params.marketName } }),
          )
        }
      } catch (err) {
        console.log('ERROR', err)
      }
    }

    return () => {
      //  eslint-disable-next-line
      if (socket && socket.readyState === WebSocket.OPEN) {
        console.log('close socket connection...')
        socket.close()
      }
    }
  }, [route])

  console.log(state)

  return (
    <View>
      <Text>hello from orderbook</Text>
      <Text>{state.bids.length}</Text>
      <Text>{state.asks.length}</Text>
    </View>
  )
})
