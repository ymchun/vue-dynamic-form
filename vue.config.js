module.exports = {
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap(options => ({
        ...options,
        happyPackMode: false,
        transpileOnly: false,
      }))
  },
  css: {
    extract: false,
  },
  parallel: false,
}
