import React, { memo } from 'react'
import { Text } from 'react-native'

import styles from './styles'

export const Typography = memo(function({ children, style = [] }) {
  return <Text style={[styles.text, ...style]}>{children}</Text>
})
