import React, { memo, useEffect, useCallback, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { colors } from '@global/styles'
import { Bid } from '@components'

export const Bids = memo(function() {
  const [marketList, setMarketList] = useState([])
  const { navigate } = useNavigation()

  const onBidPress = useCallback(
    marketName => () => {
      if (!marketName) return

      const marketNameForExchangeBot = `market_${marketName.toLowerCase()}`
      navigate('OrderBook', { marketName: marketNameForExchangeBot })
    },
    [navigate],
  )

  useEffect(() => {
    async function getPairs() {
      //  eslint-disable-next-line
      const { markets } = await fetch('http://api.narfex.com/api/v1/exchange/markets').then(res =>
        res.json(),
      )

      if (markets.length > 1) {
        setMarketList(markets.slice(0, 2))
      }
    }

    getPairs()
  }, [])

  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: colors.background,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {marketList.map(market => (
          <Bid
            key={market.ticker.market}
            onPress={onBidPress}
            market={market.ticker.market}
            percent={market.ticker.percent}
            price={market.ticker.price}
          />
        ))}
      </View>
    </SafeAreaView>
  )
})
