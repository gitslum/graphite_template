
module.exports = {
  configWebpack({ config, webpack }) {
    const configW = config.toConfig();

    const { module: { rules }} = configW;
    const jsRule = rules.find(item => item.hasOwnProperty('exclude'));

    config.module
      .rule('json')
      .test(/.json$/)
      .type('javascript/auto')
      // babel
      .use('babel')
      .loader(jsRule.use[0].loader)
      .options(jsRule.use[0].options)
      .end()
      // nativeComponent
      .use('nativeComponent')
      .loader(jsRule.use[1].loader)
      .options(jsRule.use[1].options)
      .end()
      // grpt
      .use('graphite-loader')
      .loader('graphite-loader')
  }
};
