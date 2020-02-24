import { Dimensions } from 'react-native'

export const colors = {
  cardBase: '#FFFFFF',
  background: '#FAF7F5',
  text: '#212121',
  semanticPositive: '#009B73',
  semanticNegative: '#F03723',
}

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')
