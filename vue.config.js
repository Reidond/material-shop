module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    watchOptions: {
      poll: true
    }
  },
  chainWebpack: config => {
    config.module.rules.delete("scss");

    let scssRule = config.module.rule("scss").test(/\.(scss)$/);

    [
      { name: "vue-style-loader" },
      { name: "css-loader" },
      { name: "postcss-loader" },
      { name: "fast-sass-loader" }
    ].forEach(load => {
      scssRule
        .use(load.name)
        .loader(load.loader || load.name)
        .options(load.options || {});
    });
  }
};
