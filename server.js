var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const HOSTNAME = '0.0.0.0';
const PORT = process.env.PORT || 8000;

/* Since we are using the webpack dev server we need to add this as an entry */
config.entry.unshift('webpack-dev-server/client?http://localhost:' + PORT);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  }
})
.listen(PORT, HOSTNAME, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Running at http://${HOSTNAME}:${PORT}`);
});