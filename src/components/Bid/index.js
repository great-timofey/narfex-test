import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const Bid = memo(function({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Bid Goes Here</Text>
    </TouchableOpacity>
  )
})
