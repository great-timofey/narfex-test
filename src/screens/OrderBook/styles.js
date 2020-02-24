import { StyleSheet } from 'react-native'

import { colors, deviceWidth } from '@global/styles'

const tableSectionHeight = 156
const rowHeight = 24
const iconHeight = 16

export default StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    paddingVertical: 16,
    backgroundColor: colors.background,
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
    height: tableSectionHeight,
    paddingLeft: 8,
  },
  tableCellText: {
    fontSize: 11,
  },
  bestPrice: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: rowHeight,
    top: tableSectionHeight - rowHeight / 2,
    left: 24,
    paddingLeft: 24,
  },
  bestPriceHightlightedText: {
    color: colors.semanticPositive,
    fontWeight: 'bold',
    marginRight: 24,
    fontSize: 13,
  },
  arrowUp: {
    width: 8,
    height: iconHeight,
    position: 'absolute',
    left: 75,
    top: rowHeight / 2 - iconHeight / 2,
  },
})
