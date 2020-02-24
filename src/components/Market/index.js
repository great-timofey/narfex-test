import React, { memo } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { colors } from '@global/styles'

import styles from './styles'

export const Market = memo(function({ onPress, market, price, percent }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress(market)}>
      <Text style={styles.marketName}>{market}</Text>
      <View style={styles.marketData}>
        <Text
          style={[
            { color: percent > 0 ? colors.semanticPositive : colors.semanticNegative },
            styles.price,
          ]}
        >
          {price.toFixed(5)}
        </Text>
        <Text style={{ color: percent > 0 ? colors.semanticPositive : colors.semanticNegative }}>
          {percent > 0 ? '+' : ''}
          {percent.toFixed(2)}
          {'%'}
        </Text>
      </View>
    </TouchableOpacity>
  )
})
