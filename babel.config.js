module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './assets',
          '@global': './src/global',
        },
      },
    ],
  ],
}
