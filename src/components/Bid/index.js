import React, { memo } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { colors } from '@global/styles'

export const Bid = memo(function({ onPress, market, price, percent }) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        paddingVertical: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        height: 64,
        alignItems: 'center',
      }}
      onPress={onPress(market)}
    >
      <Text style={{ fontSize: 20, marginRight: 'auto' }}>{market}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            color: percent > 0 ? colors.semanticPositive : colors.semanticNegative,
            marginRight: 22,
          }}
        >
          {price.toFixed(5)}
        </Text>
        <Text style={{ color: percent > 0 ? colors.semanticPositive : colors.semanticNegative }}>
          {percent > 0 ? '+' : '-'}
          {percent.toFixed(2)}
          {'%'}
        </Text>
      </View>
    </TouchableOpacity>
  )
})
