import { StyleSheet } from 'react-native'

import { colors, hex2rgba } from '@global/styles'

import { cellWidth } from './constants'

export default StyleSheet.create({
  container: {
    width: cellWidth,
    backgroundColor: 'transparent',
    height: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 24,
  },
  bar: {
    position: 'absolute',
    left: 0,
    height: 24,
  },
  barNegative: {
    backgroundColor: hex2rgba(colors.semanticNegative, 0.1),
  },
  barPositive: {
    backgroundColor: hex2rgba(colors.semanticPositive, 0.1),
  },
})
