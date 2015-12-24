var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.set('port', process.env.NODE_PORT || 3000);
const isDeveloping = app.get('env') !== 'production';

// Dev-specific config. Compiles the sources on the server using webpack -- includes hotswapping.
if(isDeveloping) {
    console.warn('Warning: Development environment is in use and performance could be affected.');

    var webpackDevConfig = require('./webpack.config.js');
    var compiler = require('webpack')(webpackDevConfig);

    // webpack-dev-middleware compiles and serves assets in memory -- nothing is written to the file system.
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        // The directory that static assets will be placed in when served to the client.
        publicPath: webpackDevConfig.output.publicPath
    }));

    // Sits on top of webpack-dev-middleware and adds hot-reloading
    app.use(require('webpack-hot-middleware')(compiler));
}
// Production-specific config. Sources must be compiled beforehand.
else {
    // Binds the content in the dir specified here to '/' on the client application. '/' becomes the 'public path'
    app.use('/', express.static(path.join(__dirname, 'dist')));
}

app.use('/static', express.static('static'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + app.get('port'));
});


