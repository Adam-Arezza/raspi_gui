module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: {
      bindings: "require('bindings')",
      onoff: "require('onoff')"
    }
  }
}
