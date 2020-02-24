import { StyleSheet } from 'react-native'

import { colors, deviceWidth } from '@global/styles'

const rowHeight = 24
const iconHeight = 16

export default StyleSheet.create({
  screen: {
    paddingVertical: 16,
    backgroundColor: colors.background,
    marginBottom: 30,
  },
  card: {
    padding: 16,
    paddingBottom: 0,
    backgroundColor: colors.cardBase,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 24,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 32,
  },
  table: {
    width: '100%',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  tableLegend: {
    position: 'absolute',
    top: -16,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: deviceWidth - 24 - 32,
    height: 16,
  },
  legendText: {
    fontSize: 11,
    lineHeight: 16,
    color: '#808080',
  },
  legendTextFirst: {
    paddingLeft: 40,
  },
  tableSection: {
    paddingLeft: 8,
  },
  tableCellText: {
    fontSize: 11,
    textAlign: 'left',
  },
  bestPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: rowHeight,
    left: 24,
    paddingLeft: 12,
  },
  bestPriceHightlightedText: {
    color: colors.semanticPositive,
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 5,
  },
  arrowUp: {
    width: 8,
    marginRight: 24,
    height: iconHeight,
  },
  priceContainer: {
    flex: 1 / 5,
    alignItems: 'flex-end',
  },
  totalContainer: {
    flex: 1 / 3,
    marginRight: -20,
    alignItems: 'flex-end',
  },
  amountContainer: {
    flex: 1 / 3,
    alignItems: 'flex-end',
  },
})
