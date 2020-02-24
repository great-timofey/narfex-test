// import React, { memo, useEffect, useReducer } from 'react'
import React, { memo } from 'react'
// import { View, Text, Image } from 'react-native'
import { View, Image } from 'react-native'

import { Typography, ProgressBarVertical, ProgressBarHorizontal } from '@components'
import IconArrowUp from '@assets/images/arrow-small-up.png'

import styles from './styles'

// const initialState = {
//   market: '',
//   asks: [],
//   bids: [],
// }
//
// function reducer(state, action) {
//   const { type, payload } = action
//   switch (type) {
//     case 'order_book':
//       return payload
//     case 'cancel_orders':
//       return {
//         ...state,
//         asks: state.asks.filter(ask => !payload.includes(ask.id)),
//         bids: state.bids.filter(bid => !payload.includes(bid.id)),
//       }
//     case 'new_orders':
//       const newAsks = payload.filter(newAskCandidate => newAskCandidate.action === 'sell')
//       const newBids = payload.filter(newBidCandidate => newBidCandidate.action === 'buy')
//
//       return {
//         ...state,
//         asks: state.asks.concat(newAsks),
//         bids: state.bids.concat(newBids),
//       }
//
//     default:
//       return state
//   }
// }

// export const OrderBook = memo(function({ route }) {
export const OrderBook = memo(function() {
  // const [state, dispatch] = useReducer(reducer, initialState)

  // useEffect(() => {
  //   const { params } = route
  //   let socket
  //   if (params && params.marketName) {
  //     try {
  //       //  eslint-disable-next-line
  //       socket = new WebSocket('wss://ex.bitcoinbot.pro/')
  //
  //       socket.onmessage = data => {
  //         try {
  //           const parsed = JSON.parse(data.data)
  //           const { type, body } = parsed
  //
  //           dispatch({ type, payload: body })
  //         } catch (er) {
  //           console.log('parsing error')
  //         }
  //       }
  //
  //       socket.onopen = () => {
  //         console.log('open')
  //         socket.send(
  //           JSON.stringify({ action: 'subscribe', params: { channel: `market_${params.marketName.toLowerCase()}` } }),
  //         )
  //       }
  //     } catch (err) {
  //       console.log('ERROR', err)
  //     }
  //   }
  //
  //   return () => {
  //     //  eslint-disable-next-line
  //     if (socket && socket.readyState === WebSocket.OPEN) {
  //       console.log('close socket connection...')
  //       socket.close()
  //     }
  //   }
  // }, [route])
  //
  // console.log(state)

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Typography style={[styles.title]}>Order Book</Typography>
        <View style={styles.table}>
          <View style={styles.tableLegend}>
            <Typography style={[styles.legendText, styles.legendTextFirst]}>Price USDT</Typography>
            <Typography style={[styles.legendText]}>Amount BTC</Typography>
            <Typography style={[styles.legendText]}>Total USDT</Typography>
          </View>
          <View style={styles.tableSection}>
            <ProgressBarVertical label="24%" progress={90} />
            <ProgressBarHorizontal
              progress={50}
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              progress={70}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              progress={90}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              progress={100}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              progress={5}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              progress={20}
            />
          </View>
          <View style={styles.bestPrice}>
            <Typography style={[styles.bestPriceHightlightedText]}>11,911.92</Typography>
            <Image style={styles.arrowUp} resizeMode="contain" source={IconArrowUp} />
            <Typography style={[styles.bestPriceText, styles.tableCellText]}>11,911.92</Typography>
          </View>
          <View style={[styles.tableSection, { paddingTop: 24 / 2 }]}>
            <ProgressBarVertical label="24%" positive progress={50} />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              positive
              progress={50}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              positive
              progress={70}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              positive
              progress={90}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              positive
              progress={100}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              positive
              progress={5}
            />
            <ProgressBarHorizontal
              price={<Typography style={[styles.tableCellText]}>11,031.54</Typography>}
              amount={<Typography style={[styles.tableCellText]}>0.00005958</Typography>}
              total={<Typography style={[styles.tableCellText]}>173,997.56</Typography>}
              positive
              progress={20}
            />
          </View>
        </View>
      </View>
    </View>
  )
})
