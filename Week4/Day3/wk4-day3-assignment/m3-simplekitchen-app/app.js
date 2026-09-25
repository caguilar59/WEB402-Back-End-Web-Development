const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

// Keep the original HTML source file available without letting static middleware
// intercept `/` before the Pug landing page route can render.
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;
