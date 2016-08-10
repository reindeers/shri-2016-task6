'use strict';
/**
 * @file
 * Сервер приложения.
 */
const express = require('express');

const app = express();
const getImg = '1.jpg';
app.set('port', process.env.PORT || 5000);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  console.time('render');
  response.render('index', { img: getImg });
  console.timeEnd('render');
});

// Server side - example is an Express controller
exports.logger = function(req, res) {
  var user = {
    agent: req.headers['user-agent'], // User Agent we get from headers
    referrer: req.headers['referrer'], //  Likewise for referrer
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress, // Get IP - allow for proxy
    screen: { // Get screen info that we passed in url post data
      width: req.param('width'),
      height: req.param('height')
    }
  };
  console.log(user);
  res.end();
};

app.listen(app.get('port'), function() {
  console.log('Images on port', app.get('port'));
});
