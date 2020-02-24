import React, { memo } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import { colors } from '@global/styles'
import IconBookmark from '@assets/images/icon-bookmark.png'
import { useMarketName } from '@global/useMarketName'

import { Typography } from '../Typography'

import styles from './styles'

export const Market = memo(function({ onPress, bookmarked, market, price, percent }) {
  const [marketName, marketSuffix] = useMarketName(market)

  return (
    <TouchableOpacity style={styles.container} onPress={onPress(market)}>
      <Typography style={[styles.marketName]}>{marketName}</Typography>
      <Typography style={[styles.marketSuffix]}>
        {'/'}
        {marketSuffix}
        {bookmarked && <Image source={IconBookmark} style={styles.bookmark} resizeMode="contain" />}
      </Typography>
      <View style={styles.marketData}>
        <View style={styles.marketDataItemContainer}>
          <Typography
            style={[
              { color: percent > 0 ? colors.semanticPositive : colors.semanticNegative },
              styles.price,
            ]}
          >
            {price.toFixed(5)}
          </Typography>
        </View>
        <View style={[styles.marketDataItemContainer, styles.marketDataItemContainerSmall]}>
          <Typography
            style={[{ color: percent > 0 ? colors.semanticPositive : colors.semanticNegative }]}
          >
            {percent > 0 ? '+' : ''}
            {percent.toFixed(2)}
            {'%'}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  )
})
