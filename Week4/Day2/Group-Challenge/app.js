var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

var options = {
    key: fs.readFileSync('test/fixtures/keys/agent-key.pem'),
    cert: fs.readFileSync('test/fixtures/keys/agent-cert.cert')
};

var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);