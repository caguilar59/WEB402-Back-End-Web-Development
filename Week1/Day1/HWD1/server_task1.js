const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('home.html'));
    }

    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('about.html'));
    }

    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('contact.html'));
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid Request!');
    }

});

server.listen(5000, function() {
    console.log('The NodeJS server on port 5000 is now running….');
});

server.listen(5000, function() {
    console.log('The NodeJS server on port 5000 is now running….');
});