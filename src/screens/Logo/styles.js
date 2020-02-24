import { StyleSheet } from 'react-native'

import { colors } from '@global/styles'

export default StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 64,
    height: 64,
  },
})
