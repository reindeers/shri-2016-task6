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

app.listen(app.get('port'), function() {
    console.log('Images on port', app.get('port'));
});
