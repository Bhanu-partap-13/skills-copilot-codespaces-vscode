const http = require('http');
const express = require('express');

//create a web server
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// Import the express module
const app = express();

// Define a route for comments
app.get('/comments', (req, res) => {
    res.send('Comments route');
});

// Start the server
app.listen(port, hostname, () => {
    console.log(`Express server running at http://${hostname}:${port}/`);
});