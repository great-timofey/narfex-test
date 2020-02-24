import React, { memo } from 'react'
import { View } from 'react-native'

import { Typography } from '../Typography'

import styles from './styles'

export const ProgressBarVertical = memo(function({ progress, label, positive, style = [] }) {
  return (
    <View
      style={[
        styles.container,
        positive ? styles.containerPositive : styles.containerNegative,
        ...style,
      ]}
    >
      <View
        style={[
          styles.bar,
          positive ? styles.barPositive : styles.barNegative,
          { height: `${Math.round(progress)}%` },
        ]}
      >
        {label !== '' && <Typography style={[styles.label]}>{label}</Typography>}
      </View>
    </View>
  )
})
