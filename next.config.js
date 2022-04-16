/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')

module.exports = withPWA({
  esModule: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000
    }

    return config
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
  compiler: {
    styledComponents: true
  }
})
