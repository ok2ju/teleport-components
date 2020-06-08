const path = require('path')
const isProduction = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, '../packages'),
      use: [defaultLoaders.babel]
    })

    return config
  },
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: isProd ? '/teleport-components' : ''
}
