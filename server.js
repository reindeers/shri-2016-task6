'use strict';
/**
 * @file
 * Сервер приложения.
 */
const express = require('express');

const app = express();
let getImg = '';

app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  console.time('parse');
  if (request.query.width < 1000) getImg = '2.jpg';
  else if (request.query.width > 1000) getImg = '1.jpg';
  console.timeEnd('parse');

  console.time('render');
  response.render('index', { img: getImg });
  console.timeEnd('render');
  response.end(response.statusCode.toString());
});

app.listen(app.get('port'), function() {
  console.log('Images on port', app.get('port'));
});
