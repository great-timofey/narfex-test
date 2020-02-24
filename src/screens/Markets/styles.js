import { StyleSheet } from 'react-native'

import { colors } from '@global/styles'

export default StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  separator: {
    height: 1,
    marginHorizontal: 16,
    backgroundColor: colors.separator,
  },
})
