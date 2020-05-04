const path = require('path')

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, '../packages'),
      use: [defaultLoaders.babel]
    })

    // config.resolve.alias['@teleport/portal'] = path.join(__dirname, '../packages/portal/src')

    return config
  },
}
