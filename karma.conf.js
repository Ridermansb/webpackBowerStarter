// Karma configuration
// Generated on Tue Nov 03 2015 08:28:51 GMT-0200 (Horário brasileiro de verão)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*Test.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    client: {
      mocha: { ui: 'bdd' }
    }
  })
}
