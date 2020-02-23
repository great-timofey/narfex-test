import React, { memo } from 'react'
import { View, Image, SafeAreaView } from 'react-native'

import AppIcon from '@assets/images/app-icon.png'
import { colors } from '@global/styles'

export const Logo = memo(function() {
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
        <Image
          source={AppIcon}
          style={{
            width: 64,
            height: 64,
          }}
        />
      </View>
    </SafeAreaView>
  )
})
