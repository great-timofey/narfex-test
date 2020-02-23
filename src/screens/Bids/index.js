import React, { memo, useCallback } from 'react'
import { View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { colors } from '@global/styles'
import { Bid } from '@components'

export const Bids = memo(function() {
  const { navigate } = useNavigation()

  const onBidPress = useCallback(() => {
    navigate('OrderBook')
  }, [navigate])

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
        <Bid onPress={onBidPress} />
      </View>
    </SafeAreaView>
  )
})
