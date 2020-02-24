import React, { memo } from 'react'
import { View } from 'react-native'

import styles from './styles'
import { cellWidth } from './constants'

export const ProgressBarHorizontal = memo(function({ positive, progress, price, amount, total }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {price}
        {amount}
        {total}
      </View>
      <View
        style={[
          styles.bar,
          positive ? styles.barPositive : styles.barNegative,
          { width: (cellWidth / 100) * progress },
        ]}
      />
    </View>
  )
})
