import { StyleSheet } from 'react-native'

import { colors } from '@global/styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
  },
  icon: {
    width: 24,
    height: 24,
  },
  tab: {
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 24,
    flex: 1,
    position: 'relative',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cardBase,
  },
  focus: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 32,
    height: 2,
    top: 0,
    alignSelf: 'center',
  },
})
