import React, { memo, useEffect, useMemo, useReducer, useState } from 'react'
import { View, ScrollView, Image, ActivityIndicator } from 'react-native'

import { Typography, ProgressBarVertical, ProgressBarHorizontal } from '@components'
import IconArrowUp from '@assets/images/arrow-small-up.png'
import { useMarketName } from '@global/useMarketName'

import styles from './styles'
import { initialState, reducer } from './utils'

export const OrderBook = memo(function({ route }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(true)
  const [marketName, marketSuffix] = useMarketName(route.params.marketName)

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

            setLoading(false)
            dispatch({ type, payload: body })
          } catch (er) {
            console.log('parsing error')
          }
        }

        socket.onopen = () => {
          console.log('open')
          socket.send(
            JSON.stringify({
              action: 'subscribe',
              params: { channel: `market_${params.marketName.toLowerCase()}` },
            }),
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

  const { asks, bids, totalAsks, totalBids, bestPrice } = state

  const asksProgress = useMemo(() => {
    if (totalAsks === 0 || totalBids === 0) return 0
    return (totalAsks / (totalAsks + totalBids)) * 100
  }, [totalBids, totalAsks])

  const bidsProgress = useMemo(() => {
    if (totalAsks === 0 || totalBids === 0) return 0
    return (totalBids / (totalAsks + totalBids)) * 100
  }, [totalBids, totalAsks])

  const percentageLabel = useMemo(() => {
    if (asksProgress === bidsProgress) return ''

    return `${Math.round(
      asksProgress > bidsProgress
        ? (asksProgress / bidsProgress) * 100 - 100
        : (bidsProgress / asksProgress) * 100 - 100,
    )}%`
  }, [asksProgress, bidsProgress])

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.screen}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.card}>
          <Typography style={[styles.title]}>Order Book</Typography>
          <View style={styles.table}>
            <View style={styles.tableLegend}>
              <Typography style={[styles.legendText, styles.legendTextFirst]}>
                Price {marketSuffix}
              </Typography>
              <Typography style={[styles.legendText]}>Amount {marketName}</Typography>
              <Typography style={[styles.legendText]}>Total {marketSuffix}</Typography>
            </View>
            <View style={styles.tableSection}>
              <ProgressBarVertical
                label={asksProgress > bidsProgress ? percentageLabel : ''}
                progress={asksProgress}
              />
              {asks &&
                asks.map(ask => {
                  let progress = Math.round((ask.amount / totalAsks) * 100)
                  // eslint-disable-next-line no-restricted-globals
                  if (isNaN(progress)) progress = 0

                  return (
                    <ProgressBarHorizontal
                      key={ask.id}
                      progress={progress}
                      price={
                        <View style={styles.priceContainer}>
                          <Typography style={[styles.tableCellText]}>
                            {ask.price.toFixed(2)}
                          </Typography>
                        </View>
                      }
                      amount={
                        <View style={styles.amountContainer}>
                          <Typography style={[styles.tableCellText]}>
                            {ask.amount.toFixed(9)}
                          </Typography>
                        </View>
                      }
                      total={
                        <View style={styles.totalContainer}>
                          <Typography style={[styles.tableCellText]}>
                            {(ask.amount * ask.price).toFixed(2)}
                          </Typography>
                        </View>
                      }
                    />
                  )
                })}
            </View>
            <View style={[styles.tableSection]}>
              {bestPrice !== 0 && (
                <View style={[styles.bestPrice]}>
                  <Typography style={[styles.bestPriceHightlightedText]}>{bestPrice}</Typography>
                  <Image style={styles.arrowUp} resizeMode="contain" source={IconArrowUp} />
                  <Typography style={[styles.bestPriceText, styles.tableCellText]}>
                    {bestPrice}
                    {'$'}
                  </Typography>
                </View>
              )}
              <ProgressBarVertical
                // style={[{ top: 12 }]}
                positive
                label={bidsProgress > asksProgress ? percentageLabel : ''}
                progress={bidsProgress}
              />
              {bids &&
                bids.map(bid => {
                  let progress = Math.round((bid.amount / totalAsks) * 100)
                  // eslint-disable-next-line no-restricted-globals
                  if (isNaN(progress)) progress = 0

                  return (
                    <ProgressBarHorizontal
                      positive
                      key={bid.id}
                      progress={progress}
                      price={
                        <View style={styles.priceContainer}>
                          <Typography style={[styles.tableCellText]}>
                            {bid.price.toFixed(2)}
                          </Typography>
                        </View>
                      }
                      amount={
                        <View style={styles.amountContainer}>
                          <Typography style={[styles.tableCellText]}>
                            {bid.amount.toFixed(9)}
                          </Typography>
                        </View>
                      }
                      total={
                        <View style={styles.totalContainer}>
                          <Typography style={[styles.tableCellText]}>
                            {(bid.amount * bid.price).toFixed(2)}
                          </Typography>
                        </View>
                      }
                    />
                  )
                })}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  )
})
