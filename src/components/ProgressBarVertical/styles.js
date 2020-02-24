import { StyleSheet } from 'react-native'

import { colors, hex2rgba } from '@global/styles'

export default StyleSheet.create({
  container: {
    height: 156,
    position: 'absolute',
    left: -16,
    width: 24,
  },
  containerPositive: {
    justifyContent: 'flex-start',
    backgroundColor: hex2rgba(colors.semanticPositive, 0.2),
  },
  containerNegative: {
    justifyContent: 'flex-end',
    backgroundColor: hex2rgba(colors.semanticNegative, 0.2),
  },
  bar: {
    width: 24,
  },
  barPositive: {
    backgroundColor: hex2rgba(colors.semanticPositive, 0.5),
    justifyContent: 'flex-start',
  },
  barNegative: {
    backgroundColor: hex2rgba(colors.semanticNegative, 0.3),
    justifyContent: 'flex-end',
  },
  label: {
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 16,
    position: 'absolute',
    paddingVertical: 12,
  },
})
