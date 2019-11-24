import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
const main = require('./routes/main');

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

if(ENV === 'development') {
  console.log('Loading develop settings');

  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const configServer = {
    contentBase : `http://localhost:${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
  };
  app.use(webpackDevMiddleware(compiler, configServer));
  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(`${__dirname}/public`));
}

app.get('*',(req,res) => {
  res.send(`
  <html lang="en">
  <head>
      <title>Point Of Sale</title>
      <script src="https://kit.fontawesome.com/473d269aa9.js"></script>
  </head>
  <body>
      <div id="app"></div>
      <script src="assets/app.js" type="text/javascript"></script>
      <script src="assets/vendor.js" type="text/javascript"></script>
  </body>
  </html>
  `)
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on ${PORT}`);
})