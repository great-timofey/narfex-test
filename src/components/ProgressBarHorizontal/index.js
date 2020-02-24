import React, { memo } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'
import { cellWidth } from './constants'
// maxheight = 296 / 100 * progress

export const ProgressBarHorizontal = memo(function({ positive, progress, price, amount, total }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.total}>{total}</Text>
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
