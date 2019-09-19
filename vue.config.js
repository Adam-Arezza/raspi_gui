module.exports = {
  // transformAssetUrls: {
  //   img: 'src'
  // },
  lintOnSave: false,
  configureWebpack: {
    externals: {
      bindings: "require('bindings')",
      onoff: "require('onoff')"
    }
  }
}
