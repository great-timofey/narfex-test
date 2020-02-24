import { StyleSheet } from 'react-native'

export const commonHeaderTitleStyles = {
  fontFamily: 'Montserrat-Medium',
  fontWeight: '500',
  fontSize: 16,
  lineHeight: 24,
}

export const commonHeaderStyles = {
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
}

export default StyleSheet.create({
  headerBackButton: {
    width: 100,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  headerBackIcon: {
    width: 9,
    height: 18,
  },
})
