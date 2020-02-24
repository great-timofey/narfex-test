import React, { memo } from 'react'
import { View, Image, SafeAreaView } from 'react-native'

import AppIcon from '@assets/images/app-icon.png'

import styles from './styles'

export const Logo = memo(function() {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Image source={AppIcon} style={styles.icon} />
      </View>
    </SafeAreaView>
  )
})
