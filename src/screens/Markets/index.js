import React, { memo, useEffect, useCallback, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Market } from '@components'

import styles from './styles'

export const Markets = memo(function() {
  const [marketList, setMarketList] = useState([])
  const { navigate } = useNavigation()

  const onMarketPress = useCallback(
    marketName => () => {
      if (!marketName) return
      navigate('OrderBook', { marketName })
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
      <View style={styles.screen}>
        {marketList.map(market => (
          <Market
            key={market.ticker.market}
            onPress={onMarketPress}
            market={market.ticker.market}
            percent={market.ticker.percent}
            price={market.ticker.price}
          />
        ))}
      </View>
    </SafeAreaView>
  )
})
