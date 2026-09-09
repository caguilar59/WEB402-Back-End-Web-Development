var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '..')));

app.get('/', function(req, res) {
    res.redirect('/components');
});

app.get('/components', function(req, res) {
    res.render('content');
});

app.listen(3000, function() {
    console.log('Food Blog is running at http://localhost:3000/components');
});
