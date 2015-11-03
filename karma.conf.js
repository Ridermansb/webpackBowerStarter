var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.stats = { colors: true, reasons: true };
//webpackConfig.plugins = [];

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
          './node_modules/phantomjs-polyfill/bind-polyfill.js',
          './node_modules/angular/angular.js',
          './node_modules/angular-mocks/angular-mocks.js',
          './test/**/*Test.js'
      ],
    exclude: [
    ],
    preprocessors: {
           'test/**/*.js': ['webpack', 'sourcemap']
       },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    client: {
      mocha: { ui: 'bdd' }
    },
    webpack: webpackConfig,
        webpackMiddleware: { noInfo: true }
  })
}
