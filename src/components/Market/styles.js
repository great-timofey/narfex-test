import { StyleSheet } from 'react-native'

import { colors } from '@global/styles'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.cardBase,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: 64,
    alignItems: 'center',
  },
  marketName: {
    fontSize: 20,
    marginRight: 14,
  },
  marketSuffix: {
    fontSize: 11,
    lineHeight: 16,
    color: colors.textSecondary,
    marginRight: 'auto',
  },
  marketData: {
    flexDirection: 'row',
  },
  marketDataItemContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  marketDataItemContainerSmall: {
    flex: 1 / 5,
  },
  price: {
    marginRight: 22,
  },
  bookmark: {
    width: 8,
    height: 8,
    marginTop: 8,
  },
})
