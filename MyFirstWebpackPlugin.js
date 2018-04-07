const MyFirstWebpackPlugin = (hash) => ({
// class MyFirstWebpackPlugin {
  apply(compiler) {
    // compiler.hooks.beforeRun.tapAsync("MyFirstWebpackPlugin", (compilation, cb) => {
    //   // console.log(compiler.hooks);
    //   cb();
    // });

    compiler.hooks.emit.tapAsync("MyFirstWebpackPlugin", (compilation, cb) => {
      let result

      const stats = compilation.getStats().toJson({
        // node_modules/webpack/lib/Stats.js
        hash: true,
        version: true,
        timings: false,
        assets: true,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        modules: false,
        cached: false,
        reasons: false,
        children: false,
        source: false,
        errors: false,
        errorDetails: false,
        warnings: false,
        publicPath: true,
      })

      if (hash) {
        stats['hash'] = hash
      }

      compilation.assets['manifest.json'] = { // eslint-disable-line
        size: function getSize() {
          return result ? result.length : 0
        },
        source: function getSource() {
          result = JSON.stringify(stats)
          return result
        },
      }

      cb();
    });
  }
})

module.exports = MyFirstWebpackPlugin
