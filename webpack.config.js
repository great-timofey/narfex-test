const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@assets': path.resolve(__dirname, 'assets'),
      '@global': path.resolve(__dirname, 'src/global'),
    },
  },
}
