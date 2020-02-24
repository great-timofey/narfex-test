import React, { memo, useEffect, useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Market } from '@components'
import { ORDER_BOOK } from '@global/screenNames'

import styles from './styles'

export const Markets = memo(function() {
  const [marketList, setMarketList] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false)
  const { navigate } = useNavigation()

  const onMarketPress = useCallback(
    marketName => () => {
      if (!marketName) return
      navigate(ORDER_BOOK, { marketName })
    },
    [navigate],
  )

  const getMarkets = useCallback(async () => {
    setLoading(true)

    //  eslint-disable-next-line
    const { markets } = await fetch('http://api.narfex.com/api/v1/exchange/markets').then(res =>
      res.json(),
    )

    if (markets.length > 1) {
      setMarketList(markets)
    }

    setHasInitiallyLoaded(true)
    setLoading(false)
  }, [])

  useEffect(() => {
    getMarkets()
  }, [getMarkets])

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        {hasInitiallyLoaded ? (
          <FlatList
            data={marketList}
            refreshing={loading}
            onRefresh={getMarkets}
            renderItem={({ item, index }) => (
              <Market
                key={item.ticker.market}
                bookmarked={index === 0}
                onPress={onMarketPress}
                market={item.ticker.market}
                percent={item.ticker.percent}
                price={item.ticker.price}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={item => item.market.name}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </SafeAreaView>
  )
})
