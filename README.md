Sample usage of Webpack with bower a library (in this case [stamplay-js-sdk][1]).

# To run

 * `npm run build` to run webpack and generate bundle file
 * `npm run start` to execute webpack-dev-server with watch mode

# Why?

There are same questions about how to require npm modules first and then bower. In my case I want to use [stamplay-js-sdk][1] (that is not available in npm)

 * https://github.com/lpiepiora/bower-webpack-plugin/issues/20
 * https://github.com/webpack/enhanced-resolve/issues/3
 * http://stackoverflow.com/questions/33502112/webpack-with-bower-support

[1]: https://github.com/Stamplay/stamplay-js-sdk
