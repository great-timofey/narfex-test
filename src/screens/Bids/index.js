import React, { memo } from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import { colors } from '@global/styles'

export const Bids = memo(function() {
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
        <Text>bids</Text>
      </View>
    </SafeAreaView>
  )
})
